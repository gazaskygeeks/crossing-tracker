const mg = require('./mailer.js');
const Bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const hash = (pass, cb) => {
  Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      throw err
    }
    Bcrypt.hash(pass, salt, cb);
  });
}

const sendemail = (sender, recipient, recipientemail, title, sub) => {
  mg.sendText(recipientemail, [recipient, recipientemail],
  title,
  sub,
  sender, {},
  function(err) {
    if (err)
      throw err ;
  });
}

module.exports = {
  hash: hash,
  sendemail
}
