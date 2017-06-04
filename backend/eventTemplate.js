function insertEventTemplate (data){
  var event = {
    'summary':
    `
Trip owner : ${data.username},

Trip owner phone : ${data.phone},
    From :${data.location_from},
    To :${data.location_to},
    Available seats :${data.available_seats},
    Other details :${data.details}
    ` ,
    'status':'confirmed',
    'start': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'end': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'id':data.id,
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    'attendees': [{
      'email': data.email
    }
    ]
  };
  return event;
}

function updateEventTemplate (data){
  var event = {
    'summary':`
    Trip owner : ${data.username},
    Trip owner phone : ${data.phone},
    From :${data.location_from},
    To :${data.location_to},
    Available seats :${data.available_seats},
    Other details :${data.details}`,
    'description':`List of shared passengers:\n ${data.description}`,
    'status':'confirmed',
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