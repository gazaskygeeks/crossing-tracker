const mg = require('../mailer.js');
const user = require('../../database/userhelpers.js');
module.exports = (req, res) => {

  user.createuser(req.payload, (err, result) => {

    if (err) {
      res({
        msg: 'User already registered'
      }).code(400)
    } else {
      mg.sendText('moha.buy@gmail.com', ['Recipient 1 <moha.buy@gmail.com>', 'moha.buy@gmail.com'],
        'There a new user registered',
        '<h1>there a new user registered</h1>',
        'moha.buy@gmail.com', {},
        function(err) {
          if (err)
            throw err ;
        });
      res({
        msg: 'User regestered'
      }).code(200)
    }
  })
}
