const trip = require('../../database/tripHelpers')
const user = require('../../database/userhelpers.js');
const template = require('../eventTemplate.js');
const utils = require('../eventUtils.js');
const calcTime = require('../utils.js');
module.exports = (req, res) => {
  var emails = [];
  var description = '';
  // const ownerTrip       =req.state.sid.user_id;
  const token = req.params.token;
  let memberStatus = req.params.status;
  if (memberStatus==2){
    memberStatus=-1;
  }
  if (memberStatus == 1 || memberStatus == -1) {
    trip.getTripByToken(
      [
        token,
      ],
      (error, result) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('get Trip By Token  error :', error)
          return res().code(500)
        }
        trip.updateStatus(
          [
            result.rows[0].user_id,
            memberStatus,
            result.rows[0].trip_id
          ], (err, result1) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.log('get trip by id  error :', err)
            return res().code(500)
          }
          trip.getTripByid({
            trip_id: result.rows[0].trip_id
          }, (err, result1) => {
            trip.getAllJionedUserIdByTripId(result.rows[0].trip_id, (err, result2) => {
              if (err) {
                // eslint-disable-next-line no-console
                console.log('get users ids by trip id  error :', err)
                return res().code(500)
              }
              result2.rows.map((item,index) => {
                user.getEmailByUserId(item.user_id, (err, result3) => {
                  if (err) {
                    // eslint-disable-next-line no-console
                    console.log('get email  by user id  error :', err)
                    return res().code(500)
                  }
                  emails = emails.concat({'email':result3.rows[0].email})
                  description = description.concat(`
  ${index+1}. ${result3.rows[0].username},${result3.rows[0].phone},${result3.rows[0].email} \n`)
                  result2.rowCount--;
                  if (result2.rowCount === 0) {
                    description = description.concat(`
  ${index+2}. ${result1.rows[0].username},${result1.rows[0].phone},${result1.rows[0].email} \n`);
                    const time = result1.rows[0].time;
                    const duration = result1.rows[0].duration;
                    const newTime=calcTime.endTime(time,duration)
                    var data = Object.assign(result1.rows[0], {
                      emails: emails.concat({'email':result1.rows[0].email}),
                      description : description,
                      endTime : newTime.endTime,
                      hours : newTime.hours,
                      minuts : newTime.minuts
                    })
                    var eventId = result.rows[0].trip_id;
                    var event = template.updateEventTemplate(data);
                    utils.updateEvent(event, eventId, (err, result4) => {
                      if (err) {
                        // eslint-disable-next-line no-console
                        console.log('insert joined user error :', err)
                        return res().code(500)
                      }
                      // eslint-disable-next-line no-console
                      console.log('insert joined user successfully to google calendar');
                      return res.redirect("/#/trips")
                    })
                  }
                })
              }) // end of map
            })
          })
        })
      })
  } else {

    return res('Somthing Wrong happend').code(500)

  }
}
// result1 contain all info about trip and owner trip
// result 2 contain all users_id for specific trip (trip you joined it)
