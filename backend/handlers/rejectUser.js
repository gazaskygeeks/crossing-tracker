const helpers = require('../../database/userhelpers.js');
const user = require('../../database/userhelpers.js');
const mail = require('../../backend/utils.js');
module.exports = (req, res) => {
  const valid = req.state.sid.user_type;
  if (valid === 2) { // admin user
    helpers.deletUser(req.payload.email, (err) => {
      if (err) {
        throw err
      }
      mail.sendemail('Admin comfirmation <erezedule@gmail.com>',
        `${req.payload.email}`,
        'Admin reject your registeration',
        'Your registeration was rejected , يا حيوان :)', (error, info) => {
          if (error) {
            throw error
          }
          user.getDisApprovedUser((err, users) => {
            res({
              message: 'reject registration',
              er: error,
              info: info,
              result: users.rows,
              statusCode:200
            })
          });
        })

    })
  } else {
    res({
      message: 'You are not admin',
      statusCode: 401
    })
  }
}
