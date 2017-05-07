const trip = require('../../database/tripHelpers')
module.exports = (req, res) => {
  const data = Object.assign(req.payload,  req.state.sid.user_id)
  trip.getTripByid(data,(err,result)=>{
    if (err)
      throw err
    if (result.rows.length>0){
      const d =result.rows[0];
      if (d.user_id===req.state.sid.user_id){
        trip.updatetrip(data, (err, result) => {
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
