const trip = require('../../database/tripHelpers')
const user = require('../../database/userhelpers.js');
const location = require('../../database/locationsHelpers.js');
const template = require('../eventTemplate.js');
const utils = require('../eventUtils.js');
module.exports = (req, res) => {
  const userId = req.state.sid.user_id;
  const data = Object.assign(req.payload, {
    user_id: userId
  })
  trip.gettripbytime(data, (error, result) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get Trip by time Error :', error)
      return res().code(500)

    }
    if (result.rows.length > 0) {
      res({
        msg: 'You already Created trip before',
        statusCode: 409
      })
    } else {
      trip.createtrip(data, (error, result) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('createtrip Error :', error)
          return res().code(500)
        }
        const trip_id = result.rows[0].trip_id
        user.getuserbyid(userId, (error, result1) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get user by suerId Error :', error)
            return res().code(500)

          }
          const email = result1.rows[0].email;
          const username = result1.rows[0].username;
          const phone = result1.rows[0].phone;
          location.getLocationsById(data, (err, result2) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log('get location by id Error :', err)
              return res().code(500)

            }

            const final = Object.assign(req.payload, {
              email: email,
              location_from: result2.rows[0].location_from,
              location_to: result2.rows[0].location_to,
              id: trip_id,
              username: username,
              phone:phone
            })
            const event = template.insertEventTemplate(final);
            utils.createEvent(event, (err, response) => {
              if (err) {
                // eslint-disable-next-line no-console
                console.log('Error in create event :', err)
                return res().code(500)
              }
              // eslint-disable-next-line no-console
              console.log('add event to google calendar successfully');
              res({
                msg: 'Your Trip Created Successfully',
                statusCode: 200
              })
            })
          })

        })
      })
    }
  })
}
