const trip = require('../../database/tripHelpers')
const user = require('../../database/userhelpers')
const utiles = require('../utils.js');
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
          trip.getusertripbytripid(req.payload.trip_id,(error,result)=>{
            if (error)
              {
                // eslint-disable-next-line no-console
              console.log('get user trip by trip id error :',error)
              return res().code(500)
            }
            var rows =result.rows;
            if (rows.length>0){
              rows.map((elm)=>{

                user.getuserbyid(elm.user_id,(error,result)=>{

                  if (error)
                    {
                      // eslint-disable-next-line no-console
                    console.log('get user by user id error :',error)
                    return res().code(500)
                  }
                  var email=result.rows[0].email;
                  var username=result.rows[0].username;
                  utiles.sendemail(
              'Site Admin <erezedule@gmail.com>',
                    email,
                    'There changes Happend in your trip',
                    `Hi ${username},
                    The owner of trip you joined,
                    Made new Changes on trip,
                    You can check changes by visiting
                    MyTrip page
                    `, (error, info) => {
                      if (error) {
                         // eslint-disable-next-line no-console
                        console.log('sendemail :',error)
                        return res().code(500)
                      }
                    })
                })
              })
            }
          })
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
