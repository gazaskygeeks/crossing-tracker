function insertEventTemplate (data){
  var event = {
    'summary':
    `Tripe owner : ${data.username},
    Tripe owner phone : ${data.phone},
    From :${data.location_from},
    To :${data.location_to},
    Available seats :${data.available_seats},
    Pickup poin :${data.passing_by},
    Pickup time :${data.pass_point_time}
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
    'summary':
    `Tripe owner : ${data.username},
    Tripe owner phone : ${data.phone},
    From :${data.location_from},
    To :${data.location_to},
    Available seats :${data.available_seats},
    Pickup poin :${data.passing_by},
    Pickup time :${data.pass_point_time}
    ` ,
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
