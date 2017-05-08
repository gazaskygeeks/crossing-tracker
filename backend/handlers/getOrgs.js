const orgs = require('../../database/orgsHelpers.js');
module.exports = (req, res) => {
  orgs.getOrgs((error, result) => {
    if (error) {
      {
        // eslint-disable-next-line no-console
        console.log('get Orgs Error :',error)
        res().code(500)
      }
    }
    // eslint-disable-next-line no-console
    console.log('organizations:',result.rows);
    res(result.rows)
  })
}
