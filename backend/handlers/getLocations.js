const locations = require('../../database/locationsHelpers.js');
module.exports = (req, res) => {
  locations.getLocation((err, result) => {
    if (err) {
      throw err
    }
    res(result.rows)
  })
}
