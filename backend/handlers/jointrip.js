const trip = require('../../database/tripHelpers');
const user = require('../../database/userhelpers');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  const usertripinfo = [req.state.sid.user_id, req.payload.trip_id];
  trip.getusertripbytripisuserid(usertripinfo, (error, res1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get user trip by trip id user id error :',error)
      return res().code(500)
    }
    if (res1.rows.length > 0) {
      res({
        msg: 'User is already in this Trip'
      }).code(401)
    } else {
      trip.gettripbytripid(req.payload.trip_id, (err, result) => {
        trip.getusertripbytripid(req.payload.trip_id, (err, result2) => {
          if (result2.rows.length < result.rows[0].available_seats) {
            trip.addtripuser(usertripinfo, (error) => {
              if (error) {
                // eslint-disable-next-line no-console
                console.log('add trip user error:',error)
                return res().code(500)
              }
              trip.getTripByid({trip_id:usertripinfo[1]},(error,result)=>{
                if (error) {
                  // eslint-disable-next-line no-console
                  console.log('get trip by tripid error :',error)
                  return res().code(500)
                }
                const userid=result.rows[0].user_id;
                user.getuserbyid(userid,(error,result)=>{
                  if (error) {
                    // eslint-disable-next-line no-console
                    console.log('get user by user id error :',error)
                    return res().code(500)
                  }
                  const email = result.rows[0].email;
                  const username = result.rows[0].username;
                  utiles.sendemail(
              'Site Admin <erezedule@gmail.com>',
                    email,
                    'Someone Joined Your Trip',
                    `Hi ${username},
                    There someone Joined Your Trip
                    You can discover this by
                    visiting your trip page   `, (error, info) => {
                      if (error) {
                         // eslint-disable-next-line no-console
                        console.log('sendemail :',error)
                        return res().code(500)
                      }
                      res({
                        msg: 'Trip added successfully'
                      }).code(200)
                    })
                })

              })
            })
          }
          else {
            res({
              msg: 'No Available Seats in this Trip'
            }).code(400)
          }
        })
      })
    }
  })
}
