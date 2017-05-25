const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  trip.gettripbyuserid(req.state.sid.user_id, (error, result1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get trip by user id  Error :', error)
      return res().code(500)
    }
    trip.getusertripbyuserid(req.state.sid.user_id, (error, result2) => {


      if (error) {
        // eslint-disable-next-line no-console
        console.log('get user trip by user id Error :', error)
        return res().code(500)
      }
      var tripMembers=[];
      if (result1.rowCount > 0) {

        var final = [];
        result1.rows.map((item) => {

          trip.getJoinedUser(
            [item.trip_id],(err,result4)=>{
              if (error) {
                // eslint-disable-next-line no-console
                console.log('get Joined User Error :', error)
                return res().code(500)
              }
              tripMembers= tripMembers.concat(result4.rows[0])
              trip.getJoinedTrip(item.trip_id, (error, result3) => {
                if (error) {
                  // eslint-disable-next-line no-console
                  console.log('get Joined Trip Error :', error)
                  return res().code(500)
                }

                final = final.concat(result3.rows[0])
                result2.rowCount --;
                if (result2.rowCount === 0) {
                  return res({
                    createdTrip: result1.rows,
                    joinedTrip: final,
                    tripMembers:tripMembers
                  })
                }
              })})
        })
      } else {
        res({
          createdTrip: result1.rows,
          joinedTrip: [],
          tripMembers:tripMembers
        })

      }
    })
  })
}
