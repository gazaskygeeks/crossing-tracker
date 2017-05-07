const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  trip.gettripbyuserid(req.state.sid.user_id, (err, result1) => {
    if (err)
      throw err
    trip.getusertripbyuserid(req.state.sid.user_id, (err, result2) => {
      if (err)
        throw err
      if (result2.rowCount > 0) {
        trip.getJoinedTrip(result2.rows[0].trip_id, (err, result3) => {
          if (err)
            throw err
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
