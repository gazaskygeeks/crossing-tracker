const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  trip.getUserIdByTripId(req.payload.trip_id,(err,result)=>{
    if (err){
      // eslint-disable-next-line no-console
      console.log('get user id by trip id  error :',err)
      return res().code(500)
    }
    if (result.rows.length>0){
      const d =result.rows[0];
      if (d.user_id===req.state.sid.user_id){
        trip.updatetrip(req.payload, (error, result) => {
          if (error)
            {
              // eslint-disable-next-line no-console
            console.log('update trip error :',error)
            return res().code(500)
          }
          res({msg:'Your Trip Edit Successfully'});
        })
      }else{

        res({msg:'Not Allow to Edit this trip'});
      }
    }else{


      res({msg:'No Trip Found'});
    }

  })

}
