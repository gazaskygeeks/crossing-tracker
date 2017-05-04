const orgs = require('../../database/orgsHelpers.js');
module.exports = (req, res) => {
  orgs.getOrgs((err, result) => {
    if (err) {
      throw err
    }
    res(result.rows)
  })
}
