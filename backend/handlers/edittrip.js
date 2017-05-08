const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  trip.getUserIdByTripId(req.payload.trip_id,(err,result)=>{
    if (err)
      throw err
    if (result.rows.length>0){
      const d =result.rows[0];
      if (d.user_id===req.state.sid.user_id){
        trip.updatetrip(req.payload, (err, result) => {
          if (err)
            throw err
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
