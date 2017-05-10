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
        res({msg:'Your trip removed successfully'})


      })

    } else {
      res({
        msg: 'You dont have any joined trip'
      }).code(401)
    }
  })
}
