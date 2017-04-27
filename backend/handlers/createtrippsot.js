const trip = require('../../database/triphelpers.js')
module.exports = (req, res) => {
  trip.gettripbytime(req.payload, (err, result) => {
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
