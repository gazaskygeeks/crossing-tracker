const trip = require('../../database/triphelpers.js')
module.exports = (req, res) => {
  const user ={user_id :req.state.sid.user_id}
  const data = Object.assign(JSON.parse(req.payload), user )
  trip.gettripbytime(data, (err, result) => {
    if (err)
      throw err

    if (result.rows.length > 0) {
      res({
        msg: 'You already Created trip before'
      }).code(400);
    } else {
      trip.createtrip(req.payload, (err, result) => {
        if (err)
          throw err
        res({
          msg: 'Your Trip Created Successfully'
        }).code(200)
      })
    }
  })
}
