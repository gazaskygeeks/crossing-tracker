const trip = require('../../database/triphelpers.js')
module.exports = (req, res) => {
  trip.gettripbyuserid(req.payload, (err, result) => {
    if (err)
      throw err
    if (result.rows.length > 0) {
      res(result.rows)
    } else {
      res({
        msg: 'You Dont have any trip'
      })
    }
  })
}
