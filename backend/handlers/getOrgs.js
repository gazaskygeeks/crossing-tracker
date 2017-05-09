const orgs = require('../../database/orgsHelpers.js');
module.exports = (req, res) => {
  orgs.getOrgs((error, result) => {
    if (error) {
      {
        // eslint-disable-next-line no-console
        console.log('get Orgs Error :',error)
        return res().code(500)
      }
    }
    res(result.rows)
  })
}
