const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  var tripMembers=[];
  var final = [];
  var createdTrip =[];
  trip.gettripbyuserid(req.state.sid.user_id, (error, result1) => {
console.log('result1 shouhd return trip info for userid',result1.rows);
console.log('error result1',error);
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get trip by user id  Error :', error)
      return res().code(500)
    }
    createdTrip=result1.rows;
    trip.getusertripbyuserid(req.state.sid.user_id, (error, result2) => {
      console.log('result2 return user info from usertrip for userid:',result2.rows);
      console.log('error result2:',error);
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get user trip by user id Error :', error)
        return res().code(500)
      }
      if (result1.rowCount > 0) {
        result1.rows.map((item) => {
          trip.getJoinedUser(
            [item.trip_id],(err,result4)=>{
              console.log('result4 return all disApproved user info and trip for tripid',result4.rows);
              console.log('result4 error',error);
              if (err) {
                // eslint-disable-next-line no-console
                console.log('get Joined User Error :', error)
                return res().code(500)
              }
              tripMembers= tripMembers.concat(result4.rows[0])

            })
          if (result2.rowCount > 0) {
            result2.rows.map((elm) => {
              trip.getJoinedTrip(elm.trip_id, (error, result3) => {
                console.log('result3:',result3.rows);
                console.log('result3 error:',error);
                if (error) {
                  // eslint-disable-next-line no-console
                  console.log('get Joined Trip Error :', error)
                  return res().code(500)
                }

                final = final.concat(result3.rows[0])
                result2.rowCount --;
                if (result2.rowCount === 0) {
                  return res({
                    createdTrip: createdTrip,
                    joinedTrip: final,
                    tripMembers:tripMembers
                  })
                }
              })
            })
          }
          else{
            return res({
              createdTrip: createdTrip,
              joinedTrip: final,
              tripMembers:tripMembers
            })
          }
        })
      }
      else {

        if (result2.rowCount > 0) {
          result2.rows.map((elm) => {
            trip.getJoinedTrip(elm.trip_id, (error, result3) => {
              console.log('result3333:',result3.rows);
              console.log('result3333 error:',error);
              if (error) {
                // eslint-disable-next-line no-console
                console.log('get Joined Trip Error :', error)
                return res().code(500)
              }
              final = final.concat(result3.rows[0])
              result2.rowCount --;
              if (result2.rowCount === 0) {
                return res({
                  createdTrip: createdTrip,
                  joinedTrip: final,
                  tripMembers:tripMembers
                })
              }else{
                return res({
                  createdTrip: createdTrip,
                  joinedTrip: final,
                  tripMembers:tripMembers
                })
              }
            })
          })
        }else{

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
