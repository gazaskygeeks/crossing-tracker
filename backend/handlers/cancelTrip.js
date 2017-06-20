const trip = require('../../database/tripHelpers');
const user = require('../../database/userhelpers')
const mail = require('../utils.js');
const eventUtils = require('../eventUtils.js');

module.exports = (req, res) => {
  trip.cancelTrip(req.payload.trip_id, (error, result) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get user trip by trip id user id error :', error)
      return res().code(500)
    }

    trip.selectusersbytripid(req.payload.trip_id, (error, result2) => {
      if (result2.rowCount > 0) {
        result2.rows.map((data, index) => {
          var deluser = {
            user_id: data.user_id,
            trip_id: req.payload.trip_id
          }
          trip.deleteusertrip(deluser, (error, result3) => {
            user.getEmailByUserId(deluser.user_id, (err, result) => {
              if (err) {
                // eslint-disable-next-line no-console
                console.log('get email  by user id  error :', err)
                return res().code(500)
              }
              mail.sendemail(
                'Erezedule | Admin message  <erezedule@gmail.com>',
                result.rows[0].email,
                'Trip Canceled',
                req.payload.msg, (error, info) => {
                  if (error) {
                    // eslint-disable-next-line no-console
                    console.log('sendemail Error :', error)
                    return res().code(500)
                  }
                })
              if (index + 1 == result2.rows.length) {
                eventUtils.deleteEvent(req.payload.trip_id, (err, response) => {
                  if (err) {
                    // eslint-disable-next-line no-console
                    console.log('Error in cancle event :', err)
                    return res().code(500)
                  }
                  // eslint-disable-next-line no-console
                  console.log('event was canceled successfully');
                })
                return res({
                  msg: 'Your trip canceled successfully and all joined deleted'
                })
// end of delete trip from calnder
              }
            })
          })
        }); // end of map

      } else {
        return res({
          msg: 'Your trip canceled successfully'
        })
      }
    })

  })
}
