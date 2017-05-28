function eventTemplate (data){
  var event = {
    'summary': `From :${data.location_from},'\\n',
    To :${data.location_to},
    Available seats :${data.available_seats},
    Pickup poin :${data.passing_by},
    Pickup time :${data.pass_point_time}
    `,
    'start': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
    'end': {
      'dateTime': `${data.tripdate}T${data.time}:00`,
      'timeZone': '(GMT+03:00) Jerusalem'
    },
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
module.exports = {eventTemplate}
