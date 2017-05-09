const trip = require('../../database/tripHelpers');

module.exports = (req, res) => {
  const data={trip_id:req.params.id}
  trip.getTripByid(data, (error, result) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get Trip by id Error :',error)
      return res().code(500)

    }
    res(result.rows)
  })
}
