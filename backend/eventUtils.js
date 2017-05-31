/*global process*/

const utils = require('./utils.js');
const google = require('googleapis');
const calendar = google.calendar('v3');
require('env2')('./.env');
function createEvent(event, cb) {
  utils.googleAuth((err, auth) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error in google auth :', err)
      return;
    }
    calendar.events.insert({
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      'sendNotifications': true,
      resource: event,
    }, cb)
  })
}

function updateEvent(event,id, cb) {
  utils.googleAuth((err, auth) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error in google auth :', err)
      return;
    }
    calendar.events.update({
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      'sendNotifications': true,
      resource: event,
      eventId: id
    }, cb)
  })
}

module.exports = {
  createEvent,
  updateEvent
}
