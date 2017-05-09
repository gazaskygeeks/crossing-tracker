const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  trip.gettripbyuserid(req.state.sid.user_id, (error, result1) => {
    if (error)
      {
          // eslint-disable-next-line no-console
      console.log('get trip by user id  :',error)
      return res().code(500)
    }
    trip.getusertripbyuserid(req.state.sid.user_id, (error, result2) => {
      if (error)
        {
            // eslint-disable-next-line no-console
        console.log('get user trip by user id :',error)
        return res().code(500)
      }
      if (result2.rowCount > 0) {
        trip.getJoinedTrip(result2.rows[0].trip_id, (error, result3) => {
          if (error)
            {
                // eslint-disable-next-line no-console
            console.log('get Joined Trip  :',error)
            return res().code(500)
          }
          res({
            createdTrip: result1.rows,
            joinedTrip: result3.rows
          })
        })
      } else {
        res({
          createdTrip: result1.rows,
          joinedTrip: []
        })

      }
    })
  })
}
