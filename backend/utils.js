/*global process*/

require('env2')('./.env');
const Bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const SALT_WORK_FACTOR = 10;
const google = require('googleapis');

const hash = (pass, cb) => {
  Bcrypt.genSalt(SALT_WORK_FACTOR, function(error, salt) {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('genSalt :', error)

      throw error
    }
    Bcrypt.hash(pass, salt, cb);
  });
}

const sendemail = (sender, recipient, sub, content, cb) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });
  var mailOptions = {
    from: sender,
    to: recipient,
    subject: sub,
    html: `<p>${content}<p>`
  };
  transporter.sendMail(mailOptions, cb)
}

const googleAuth = (cb) => {
  const jwtClient = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar'],
    null
  );

  jwtClient.authorize((err) => {
    if (err) {
      cb(err, undefined)
      return;
    }
    cb(err, jwtClient)

  });
}

module.exports = {
  hash,
  sendemail,
  googleAuth

}
