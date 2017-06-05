const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  var tripMembers=[];
  var final = [];
  var createdTrip =[];
  trip.gettripbyuserid(req.state.sid.user_id, (error, result1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get trip by user id  Error :', error)
      return res().code(500)
    }
    createdTrip=result1.rows;
    trip.getusertripbyuserid(req.state.sid.user_id, (error, result2) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get user trip by user id Error :', error)
        return res().code(500)
      }
      if (result1.rowCount > 0) {
        result1.rows.map((item,index1) => {
          trip.getJoinedUser(
            [item.trip_id],(err,result4)=>{
              if (error) {
                // eslint-disable-next-line no-console
                console.log('get Joined User Error :', error)
                return res().code(500)
              }
              if(result4.rowCount>0){
                tripMembers= tripMembers.concat(result4.rows)
              }
              if (result2.rowCount > 0) {
                result2.rows.map((elm,index2) => {
                  trip.getJoinedTrip(elm.trip_id, (error, result3) => {

                    if (error) {
                      // eslint-disable-next-line no-console
                      console.log('get Joined Trip Error :', error)
                      return res().code(500)
                    }
                    final = final.concat(result3.rows[0])

                    if(index1==result1.rowCount-1){
                      return res({
                        createdTrip: createdTrip,
                        joinedTrip: final,
                        tripMembers:tripMembers
                      })
                    }
                  })
                })
              }else {
                if(index1==result1.rowCount-1){
                  return res({
                    createdTrip: createdTrip,
                    joinedTrip: final,
                    tripMembers:tripMembers
                  })
                }
              }

            })
        })
      }
      else {

        if (result2.rowCount > 0) {
          result2.rows.map((elm,index2) => {
            trip.getJoinedTrip(elm.trip_id, (error, result3) => {

              if (error) {
                // eslint-disable-next-line no-console
                console.log('get Joined Trip Error :', error)
                return res().code(500)
              }
              final = final.concat(result3.rows[0])

              return res({
                createdTrip: createdTrip,
                joinedTrip: final,
                tripMembers:tripMembers
              })
            })
          })
        } else{

          return res({
            createdTrip: createdTrip,
            joinedTrip: final,
            tripMembers:tripMembers
          })

        }

      }
    })
  })
}
