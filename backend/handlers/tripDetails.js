const trip = require('../../database/tripHelpers');

module.exports = (req, res) => {
  const data={trip_id:req.params.id}
  trip.getTripByid(data, (err, result) => {
    if (err) {
      throw err
    }
    res(result.rows)
  })
}
