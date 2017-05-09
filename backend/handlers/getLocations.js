const locations = require('../../database/locationsHelpers.js');
module.exports = (req, res) => {
  locations.getLocation((error, result) => {
    if (error) {
      {
        // eslint-disable-next-line no-console
        console.log('get Location error :',error)
        return res().code(500)

      }
    }
    res(result.rows)
  })
}
