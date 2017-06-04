const trip = require('../../database/tripHelpers');
module.exports = (req, res) => {
  const from = req.payload.from;
  const to = req.payload.to;
  if (!from&&!to){
    res('Error').code(400)
  }
  else if (from&&to){
    trip.getTripFromTo([from,to],(error,result)=>{
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip From To Error :',error)
        return res().code(500)
      }
      res(result.rows);
    })
  }
  else if (from){
    trip.getTripFrom([from],(error,result)=>{
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip From  Error :',error)
        return res().code(500)
      }
      res(result.rows);
    })

  }
  else if (to){
    trip.getTripTo([to],(error,result)=>{
      if (error) {
        // eslint-disable-next-line no-console
        console.log('get Trip To Error :',error)
        return res().code(500)
      }
      res(result.rows);
    })
  }
}
