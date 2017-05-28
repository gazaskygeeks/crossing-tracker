/*global process*/

const Bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const SALT_WORK_FACTOR = 10;
const google = require('googleapis');
require('env2')('.env');
const key = require('../key.json');

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
    html: `<b>${content}</b>`
  };
  transporter.sendMail(mailOptions, cb)
}

const googleAuth = (cb) => {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/calendar'],
    null
  );
  jwtClient.authorize((err) => {
    if (err) {
      console.log('errrrr', err); //eslint-disable-line
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
