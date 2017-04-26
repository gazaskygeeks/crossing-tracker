const trip = require('../../database/triphelpers.js')
module.exports = (req, res) => {

  /*
  1. insert user data into database , if return err (return boom msg email is exist)
  2. else reply signup page
  */

  trip.gettripbytime(req.payload, (err, result) => {
    if (err)
      throw err

    if(result){

      res( {msg:'You already Created trip before'}).code(400);
    } else
    {
      trip.createtrip(req.payload,(err,result)=>{

        if (err)
          throw err

        res ({msg:'Your Trip Created Successfully '})
      })
    }
  })
}
