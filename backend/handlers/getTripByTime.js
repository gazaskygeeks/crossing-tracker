const trip = require('../../database/tripHelpers');
module.exports = (req, res) => {
  trip.getTripByTime(req.payload, (error, result) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get Trip By Time Error :',error)
      {
        return res().code(500)
      }
    }
    res(result.rows)
  })
}
