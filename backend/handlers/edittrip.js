const trip = require('../../database/tripHelpers')
const user = require('../../database/userhelpers')
const utiles = require('../utils.js');
const template = require('../eventTemplate.js');
const eventUtils = require('../eventUtils.js');
module.exports = (req, res) => {
  const tripId = req.payload.trip_id;
  var emails = [];
  trip.getUserIdByTripId(req.payload.trip_id, (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('get user id by trip id  error :', err)
      return res().code(500)
    }
    if (result.rows.length > 0) {
      const d = result.rows[0];
      if (d.user_id === req.state.sid.user_id) {
        trip.updatetrip(req.payload, (error, result) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('update trip error :', error)
            return res().code(500)
          }
          trip.getusertripbytripid(req.payload.trip_id, (error, result) => {
            if (error) {
              // eslint-disable-next-line no-console
              console.log('get user trip by trip id error :', error)
              return res().code(500)
            }
            var rows = result.rows;
            if (rows.length > 0) {
              rows.map((elm) => {
                user.getuserbyid(elm.user_id, (error, result) => {

                  if (error) {
                    // eslint-disable-next-line no-console
                    console.log('get user by user id error :', error)
                    return res().code(500)
                  }
                  var email = result.rows[0].email;
                  var username = result.rows[0].username;
                  utiles.sendemail(
                    'Site Admin <erezedule@gmail.com>',
                    email,
                    'There changes Happend in your trip',
                    `Hi ${username},
                    The owner of trip you joined,
                    Made new Changes on trip,
                    You can check changes by visiting
                    MyTrip page
                    `, (error, info) => {
                      if (error) {
                        // eslint-disable-next-line no-console
                        console.log('sendemail :', error)
                        return res().code(500)
                      }
                    })
                })
              }) // end map

              trip.getTripByid({
                trip_id: tripId
              }, (err, tripAndUserInfo) => {
                if (err) {
                  // eslint-disable-next-line no-console
                  console.log('get trip by id  error :', err)
                  return res().code(500)
                }
                trip.getAllJionedUserIdByTripId(tripId, (err, usersId) => {
                  if (err) {
                    // eslint-disable-next-line no-console
                    console.log('get users ids by trip id  error :', err)
                    return res().code(500)
                  }
                  usersId.rows.map((item) => {
                    user.getEmailByUserId(item.user_id, (err, ownEmails) => {
                      if (err) {
                        // eslint-disable-next-line no-console
                        console.log('get email  by user id  error :', err)
                        return res().code(500)
                      }
                      emails = emails.concat({
                        'email': ownEmails.rows[0].email
                      })
                      usersId.rowCount--;
                      if (usersId.rowCount === 0) {
                        var data = Object.assign(tripAndUserInfo.rows[0], {
                          emails: emails.concat({
                            'email': tripAndUserInfo.rows[0].email
                          })
                        })
                        var eventId = tripId;
                        var event = template.updateEventTemplate(data);
                        eventUtils.updateEvent(event, eventId,
                          (err, response) => {
                            if (err) {
                              // eslint-disable-next-line no-console
                              console.log('error in update event :', err)
                              return res().code(500)
                            }
                            // eslint-disable-next-line no-console
                            console.log('update info in google calendar successfully');
                          })
                      }
                    })
                  })
                })
              })
            } else {
              //if no one joined the trip
              trip.getTripByid({
                trip_id: tripId
              }, (err, tripAndUserInfo) => {
                if (err) {
                  // eslint-disable-next-line no-console
                  console.log('get trip and user info error :', err)
                  return res().code(500)
                }
                var eventId = tripId;
                var attendees = [{
                  'email': tripAndUserInfo.rows[0].email
                }];
                var data = Object.assign(tripAndUserInfo.rows[0], {
                  emails: attendees
                })
                var event = template.updateEventTemplate(data);
                eventUtils.updateEvent(event, eventId, (err, response) => {
                  if (err) {
                    // eslint-disable-next-line no-console
                    console.log('error in update event :', err)
                    return res().code(500)
                  }
                  // eslint-disable-next-line no-console
                  console.log('update info in google calendar successfully');
                })
              })
            }
          })
          res({
            msg: 'Your Trip Edit Successfully'
          });
        }) // end of updatetrip
      } else {
        res({
          msg: 'Not Allow to Edit this trip'
        });
      }
    } else {
      res({
        msg: 'No Trip Found'
      });
    }
  })
}
