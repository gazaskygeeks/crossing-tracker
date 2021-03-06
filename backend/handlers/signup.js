
/*global process*/
require('env2')('./.env');
const user = require('../../database/userhelpers.js');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  user.createuser(req.payload, (error, result) => {

    if (error) {
      res({
        msg: 'User already registered',
        statusCode:409,
      })
    } else {
      utiles.sendemail(`${req.payload.username} <${process.env.GMAIL_USER}>`,
        `${process.env.GMAIL_USER}`,
        `New registeration from <${req.payload.email}>`,
        `A new user registered with email:
         ${req.payload.email}`, (error, info) => {
           if (error) {
             // eslint-disable-next-line no-console
             console.log('sendemail Error :',error)
             return res().code(500)

           }
           res({
             msg: 'User regestered',
             statusCode: 200
           })
         });
    }
  })
}
