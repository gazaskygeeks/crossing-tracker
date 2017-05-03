const user = require('../../database/userhelpers.js');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  user.createuser(req.payload, (err, result) => {

    if (err) {
      res({
        msg: 'User already registered',
        statusCode:409,
      })
    } else {
      utiles.sendemail(`${req.payload.username} <erezedule@gmail.com>`,
        'erezedule@gmail.com',
        `New registeration from <${req.payload.email}>`,
        `A new user registered with email:
         ${req.payload.email}`, (err, info) => {
           if (err) {
             throw err
           }
           res({
             msg: 'User regestered',
             statusCode: 200,
           })
         });
    }
  })
}
