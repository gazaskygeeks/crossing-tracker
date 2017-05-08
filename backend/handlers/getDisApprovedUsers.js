const user = require('../../database/userhelpers.js');
module.exports = (req, res) => {
  const valid = req.state.sid.user_type;
  if (valid === 2) {
    user.getDisApprovedUser((error, users) => {
      if (error) {
        {
          // eslint-disable-next-line no-console
          console.log('getDisApprovedUser error :',error)
          res().code(500)
        }
      }
      res({
        result: users.rows,
        statusCode: 200
      })
    })
  } else {
    res({
      message: 'You are not admin',
      statusCode: 401
    })
  }
}
