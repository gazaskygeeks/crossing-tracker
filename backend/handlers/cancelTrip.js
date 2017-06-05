const trip = require('../../database/tripHelpers');

module.exports = (req, res) => {
  const usertripinfo = [req.state.sid.user_id, req.payload.trip_id];
  trip.getusertripbytripisuserid(usertripinfo, (error, res1) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('get user trip by trip id user id error :',error)
      return res().code(500)
    }
    if (res1.rows.length > 0) {
      trip.deleteusertrip(
        {
          user_id:req.state.sid.user_id,
          trip_id:req.payload.trip_id
        }
        , (error, result) => {
        if (error)
        {
          return   res({msg:'There was error try again'})
        }
        trip.getTripByid({trip_id:usertripinfo[1]},(error,result)=>{
          if (error) {
            // eslint-disable-next-line no-console
            console.log('get trip by tripid error :',error)
            return res().code(500)
          }

          const seats= result.rows[0].available_seats;

          trip.updateseats(
            {
              trip_id:usertripinfo[1],
              available_seats:seats+1
            }
            ,
            (error,result2)=>{
              if (error) {

                // eslint-disable-next-line no-console
                console.log('Update Seats Error :',error)
                return res().code(500)
              }
              res({msg:'Your trip removed successfully'})

            })
        })
      })

    } else {
      res({
        msg: 'You dont have any joined trip'
      }).code(401)
    }
  })
}
