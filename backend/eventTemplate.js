function insertEventTemplate(data) {
  var event = {
    'summary': `Trip from ${data.location_from} to ${data.location_to}`,
    'status': 'confirmed',
    'description':`Leaving at ${data.time} from ${data.location_from}
Ending at ${data.location_to} (${data.details})
At approximately ${data.endTime} (${data.hours} hours & ${data.minuts} minuts)`,
    'start': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'end': {
      'dateTime': `${data.tripdate}T${data.endTime}:00`,
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
At approximately ${data.endTime} (${data.hours} hours & ${data.minuts} minuts)
\nPassengers:\n${data.description}`,
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
