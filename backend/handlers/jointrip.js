const trip = require('../../database/triphelpers.js');

module.exports = (req, res) => {
const pay = JSON.parse(req.payload);
  const usertripinfo = [req.state.sid.user_id, Number(pay.trip_id)];
  console.log(usertripinfo);
  trip.getusertripbytripisuserid(usertripinfo, (err, res1) => {
    if (res1.rows.length > 0) {
      res({
        msg: 'User is already in this Trip'
      }).code(401)
    } else {
      trip.gettripbytripid(pay, (err, result) => {
        trip.getusertripbytripid(pay, (err, result2) => {
          if (result2.rows.length < result.rows[0].available_seats) {
            trip.addtripuser(usertripinfo, (err) => {
              res({
                msg: 'Trip added successfully'
              }).code(200)
            })
          } else {
            res({
              msg: 'No Available Seats in this Trip'
            }).code(400)
          }
        })
        if (err) {
          throw err
        }
      })
    }
  })
}
