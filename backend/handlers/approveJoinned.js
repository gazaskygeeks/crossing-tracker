const trip = require('../../database/tripHelpers')
const user = require('../../database/userhelpers.js');
const template = require('../eventTemplate.js');
const utils = require('../eventUtils.js');
var emails = [];
module.exports = (req, res) => {
  // const ownerTrip       =req.state.sid.user_id;
  const joinnedMemberId = req.payload.userJoinnedId;
  const memberStatus = req.payload.memberStatus;
  const trip_id = req.payload.trip_id;

  if (memberStatus === 1 || memberStatus === -1) {
    trip.updateStatus(
      [
        joinnedMemberId,
        memberStatus,
        trip_id
      ],
      (error, result) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('update status  error :', error)
          return res().code(500)
        }
        trip.getTripByid({
          trip_id: trip_id
        }, (err, result1) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log('get trip by id  error :', err)
            return res().code(500)
          }
          trip.getAllJionedUserIdByTripId(trip_id, (err, result2) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log('get users ids by trip id  error :', err)
              return res().code(500)
            }
            result2.rows.map((item) => {
              user.getEmailByUserId(item.user_id, (err, result3) => {
                if (err) {
                  // eslint-disable-next-line no-console
                  console.log('get email  by user id  error :', err)
                  return res().code(500)
                }
                emails = emails.concat({'email':result3.rows[0].email})
                result2.rowCount--;
                if (result2.rowCount === 0) {
                  var data = Object.assign(result1.rows[0], {
                    emails: emails.concat({'email':result1.rows[0].email})
                  })
                  var eventId = trip_id;
                  var event = template.updateEventTemplate(data);
                  utils.updateEvent(event, eventId, (err, result4) => {
                    if (err) {
                      // eslint-disable-next-line no-console
                      console.log('insert joined user error :', err)
                      return res().code(500)
                    }
                    // eslint-disable-next-line no-console
                    console.log('insert joined user successfully to google calendar');
                    return res({
                      msg: 'Update successfully'
                    });
                  })
                }
              })
            }) // end of map
          })

        })
      })
  } else {

    return res('Somthing Wrong happend').code(500)

  }
}
// result1 contain all info about trip and owner trip
// result 2 contain all users_id for specific trip (trip you joined it)
