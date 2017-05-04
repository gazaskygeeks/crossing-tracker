const trip = require('../../database/triphelpers.js');

module.exports = (req, res) => {
  trip.getTripByid(JSON.parse(req.payload,10), (err, result) => {
    if (err) {
      throw err
    }
    res(result.rows)
  })
}
