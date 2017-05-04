const user = require('../../database/userhelpers.js');
module.exports = (req, res) => {
  const valid = req.state.sid.user_type;
  if (valid === 2) {
    user.getDisApprovedUser((err, users) => {
      if (err) {
        throw err
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
