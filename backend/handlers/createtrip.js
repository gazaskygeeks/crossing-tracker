const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
<<<<<<< HEAD:backend/handlers/createtrippsot.js
  const data = Object.assign(req.payload, {user_id :req.state.sid.user_id} )
=======
  const user_id = {user_id: req.state.sid.user_id};
  const data = Object.assign(req.payload, user_id);
>>>>>>> 5005f3a05cbb23f57c72fc691e60d2c881391ecc:backend/handlers/createtrip.js
  trip.gettripbytime(data, (err, result) => {
    if (err)
      throw err

    if (result.rows.length > 0) {
      res({
        msg: 'You already Created trip before'
      }).code(400);
    } else {
      trip.createtrip(data, (err, result) => {
        if (err)
          throw err
        res({
          msg: 'Your Trip Created Successfully'
        }).code(200)
      })
    }
  })
}
