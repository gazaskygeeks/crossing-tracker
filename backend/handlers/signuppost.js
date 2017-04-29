
const user = require('../../database/userhelpers.js');
module.exports = (req, res) => {
  user.createuser(req.payload, (err, result) => {

    if (err) {
      res({
        msg: 'User already regestered'
      }).code(400)
    } else {
      res({
        msg: 'User regestered'
      }).code(200)
    }
  })
}
