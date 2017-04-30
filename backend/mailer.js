/*global process*/

 const Mailgun = require('mailgun').Mailgun;
 const mg = new Mailgun(process.env.MAILGUN_KEY);

 module.exports =mg;
