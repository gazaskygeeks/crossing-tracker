const trip = require('../../database/tripHelpers');
const user = require('../../database/userhelpers');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  const usertripinfo = [req.state.sid.user_id, req.payload.trip_id];
  trip.getusertripbytripisuserid(usertripinfo, (error, res1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get user trip by trip id user id error :', error)
      return res().code(500)
    }
    if (res1.rows.length > 0) {
      res({
        msg: 'User is already in this Trip',
      }).code(401)
    } else {
      trip.getTripByid({
        trip_id: usertripinfo[1]
      }, (error, result) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('get trip by tripid error :', error)
          return res().code(500)
        }

        if (result.rows[0].user_id == usertripinfo[0]) {
          return res({
            msg: 'You can not join your created trip ',
          }).code(401)
        }
        trip.getseats(req.payload.trip_id, (error, result) => {
          const seats = result.rows[0].available_seats;
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get trip by trip id error:', error)
            return res().code(500)
          }
          trip.getusertripbytripid(req.payload.trip_id, (err, result2) => {
            if (result2.rows.length <=result.rows[0].available_seats &&
              result.rows[0].available_seats!=0) {
              trip.addtripuser(usertripinfo, (error) => {
                if (error) {
                  // eslint-disable-next-line no-console
                  console.log('add trip user error:', error)
                  return res().code(500)
                }
                trip.getTripByid({
                  trip_id: usertripinfo[1]
                }, (error, result) => {
                  if (error) {
                    // eslint-disable-next-line no-console
                    console.log('get trip by tripid error :', error)
                    return res().code(500)
                  }
                  const userid = result.rows[0].user_id;
                  user.getuserbyid(userid, (error, result) => {
                    if (error) {
                      // eslint-disable-next-line no-console
                      console.log('get user by user id error :', error)
                      return res().code(500)
                    }
                    trip.updateseats({
                      trip_id: usertripinfo[1],
                      available_seats: seats - 1
                    },
                      (error, result2) => {
                        if (error) {
                          // eslint-disable-next-line no-console
                          console.log('Update Seats Error :', error)
                          return res().code(500)
                        }
                        const owner = result.rows[0].email;
                        const username = result.rows[0].username;
                        user.getuserbyid(usertripinfo[0], (error, result) => {
                          const involved = result.rows[0].email;
                          utiles.sendemail(
                            'Site Admin <erezedule@gmail.com>',
                            owner,
                            'Someone Joined Your Trip',
                            `Hi ${username},
                            ${involved} has requested to join your trip,
                            go to "My trips" to Accept/Reject passenger.
                            `, (error, info) => {
                              if (error) {
                                // eslint-disable-next-line no-console
                                console.log('sendemail :', error)
                                return res().code(500)
                              }
                              trip.getTripByid({
                                trip_id: usertripinfo[1]
                              }, (error, data) => {
                                res({
                                  msg: 'Trip added successfully',
                                  result: data.rows
                                }).code(200)
                              })
                            })
                        })
                      })
                  })
                })
              })
            } else {
              res({
                msg: 'No Available Seats in this Trip',
              }).code(400)
            }
          })
        })
      })
    }
  })
}
