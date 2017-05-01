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
  let mailOptions = {
    from: '"Fred Foo 👻" '.sender, // sender address
    to: recipient, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
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
  hash,
  sendemail
}
