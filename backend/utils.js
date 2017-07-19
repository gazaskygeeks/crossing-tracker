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
const endTime = (time,duration)=>{
  var hour = Math.floor(duration/60)
  var minut = duration % 60

  var seperate = time.split(':')
  var hours = hour+Number(seperate[0])
  var minuts = minut+Number(seperate[1])
  if(minuts >= 60){
    hours += 1;
    minuts = minuts %60;
    if(minuts <=9){
      minuts= '0' + minuts
    }
  }
  if(hours >= 24){
    hours = hours % 24;
    if(hours <=9){
      hours= '0' + hours
    }
  }
  return`${hours}:${minuts}`

}
module.exports = {
  hash,
  sendemail,
  googleAuth,
  endTime

}
