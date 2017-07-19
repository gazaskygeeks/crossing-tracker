function insertEventTemplate(data) {
  var event = {
    'summary': `Trip from ${data.location_from} to ${data.location_to}`,
    'status': 'confirmed',
    'description':`Leaving at ${data.time} from ${data.location_from}
Ending at ${data.location_to} (${data.details})
At approximately 15:00 (duration hours)`,
    'start': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'defaultEventLength': '120',
    'end': {
      'dateTime': `${data.tripdate}T15:00:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'id': data.id,
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    'attendees': [{
      'email': data.email
    }]
  };
  return event;
}



function updateEventTemplate(data) {
  var event = {
    'summary': `Trip from ${data.location_from} to ${data.location_to}`,
    'description': `Leaving at ${data.time} from ${data.location_from}
Ending at ${data.location_to} (${data.details})
At approximately 15:00 (duration hours)\n\n Passengers:\n
${data.description}`,
    'status': 'confirmed',
    'start': {
      'dateTime': `${data.date}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'end': {
      'dateTime': `${data.date}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    'attendees': data.emails
  };
  return event;
}
module.exports = {
  insertEventTemplate,
  updateEventTemplate
}
