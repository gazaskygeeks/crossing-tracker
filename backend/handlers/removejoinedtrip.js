const trip = require('../../database/tripHelpers');
const user = require('../../database/userhelpers.js');
const template = require('../../backend/eventTemplate.js');
const eventUtils = require('../../backend/eventUtils.js');

module.exports = (req, res) => {
  const usertripinfo = [req.state.sid.user_id, req.payload.trip_id];
  const tripId = req.payload.trip_id;
  var emails = [];
  var description = '';
  trip.getusertripbytripisuserid(usertripinfo, (error, res1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get user trip by trip id user id error :', error)
      return res().code(500)
    }
    if (res1.rows.length > 0) {
      trip.deleteusertrip({
        user_id: req.state.sid.user_id,
        trip_id: req.payload.trip_id
      }, (error, result) => {
        if (error) {
          return res({
            msg: 'There was error try again'
          })
        }
        trip.getTripByid({
          trip_id: usertripinfo[1]
        }, (error, result) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get trip by tripid error :', error)
            return res().code(500)
          }

          const seats = result.rows[0].available_seats;

          trip.updateseats({
            trip_id: usertripinfo[1],
            available_seats: seats + 1
          },
            (error, result2) => {
              if (error) {
                // eslint-disable-next-line no-console
                console.log('Update Seats Error :', error)
                return res().code(500)
              }
              // Do stuff of google calnder
              trip.getAllJionedUserIdByTripId(tripId, (err, usersId) => {
                if (err) {
                  // eslint-disable-next-line no-console
                  console.log('get users ids by trip id  error :', err)
                  return res().code(500)
                }
                if (usersId.rows.length > 0) { // there are users joined to this trip
                  usersId.rows.map((item, index) => {
                    user.getEmailByUserId(item.user_id, (err, ownEmails) => {
                      if (err) {
                        // eslint-disable-next-line no-console
                        console.log('get email  by user id  error :', err)
                        return res().code(500)
                      }
                      emails = emails.concat({
                        'email': ownEmails.rows[0].email
                      })
                      description = description.concat(
                        `${index+1}. ${ownEmails.rows[0].username},
                        ${ownEmails.rows[0].phone},
                        ${ownEmails.rows[0].email} \n`)
                      usersId.rowCount--;
                      if (usersId.rowCount === 0) {
                        trip.getTripByid({
                          trip_id: tripId
                        }, (err, userAndTripInfo) => {
                          if (err) {
                            // eslint-disable-next-line no-console
                            console.log('get trip by id  error :', err)
                            return res().code(500)
                          }
                          // description = description.concat(
                          //   `${userAndTripInfo.rows[0].username}:
                          //   ${userAndTripInfo.rows[0].phone}\n`);
                          var data = Object.assign(userAndTripInfo.rows[0], {
                            emails: emails.concat({
                              'email': userAndTripInfo.rows[0].email
                            }),
                            description: description
                          })
                          var eventId = tripId;
                          var event = template.updateEventTemplate(data);
                          eventUtils.updateEvent(event, eventId,
                            (err, response) => {
                              if (err) {
                                // eslint-disable-next-line no-console
                                console.log('error in remove event :', err)
                                return res().code(500)
                              }
                              // eslint-disable-next-line no-console
                              console.log('removed info successfully from google calendar');
                              res({
                                msg: 'Your trip removed successfully'
                              })
                            })
                        })
                      } //end if of usersId.rowCount === 0
                    }) // end of getEmailByUserId
                  }) //end map array
                } else { // no one joined to this trip
                  trip.getTripByid({
                    trip_id: tripId
                  }, (err, userAndTripInfo) => {
                    if (err) {
                      // eslint-disable-next-line no-console
                      console.log('get trip and user info error :', err)
                      return res().code(500)
                    }
                    var eventId = tripId;
                    description = description.concat(
                      `${userAndTripInfo.rows[0].username}:
                      ${userAndTripInfo.rows[0].phone}\n`);
                    var attendees = [{
                      'email': userAndTripInfo.rows[0].email
                    }]
                    var data = Object.assign(userAndTripInfo.rows[0], {
                      emails: attendees,
                      description: description
                    })
                    var event = template.updateEventTemplate(data);
                    eventUtils.updateEvent(event, eventId,
                      (err, response) => {
                        if (err) {
                          // eslint-disable-next-line no-console
                          console.log('error in remove event :', err)
                          return res().code(500)
                        }
                        // eslint-disable-next-line no-console
                        console.log('removed info successfully from google calendar');
                        res({
                          msg: 'Your trip removed successfully'
                        })
                      })
                  })
                } // end else of if (usersId.rows.length > 0)
              })
              // END stuff of google cannder
            })
        })
      })

    } else {
      res({
        msg: 'You dont have any joined trip'
      }).code(401)
    }
  })
}
