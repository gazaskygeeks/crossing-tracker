const trip = require('../../database/tripHelpers');
module.exports = (req, res) => {
  trip.getTripeByDate(req.payload, (err, result) => {
    if (err) {
      throw err
    }
    res(result.rows)
  })
}
