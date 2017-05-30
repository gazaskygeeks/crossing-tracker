const utils = require('./utils.js');
const google = require('googleapis');
const calendar = google.calendar('v3');

function createEvent(event, cb) {
  utils.googleAuth((err, auth) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error in google auth :', err)
      return;
    }
    calendar.events.insert({
      auth: auth,
      calendarId: '8959pk6tb4ki55dtc0m085e6l4@group.calendar.google.com',
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
      calendarId: '8959pk6tb4ki55dtc0m085e6l4@group.calendar.google.com',
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
