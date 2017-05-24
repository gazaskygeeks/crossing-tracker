const trip = require('../../database/tripHelpers')


module.exports = (req,res)=>{
  // const ownerTrip       =req.state.sid.user_id;
  const joinnedMemberId   = req.payload.userJoinnedId;
  const memberStatus    = req.payload.memberStatus;
  const trip_id         = req.payload.trip_id;

  if (memberStatus===1||memberStatus===-1){

    trip.updateStatus(
      [
        joinnedMemberId,
        memberStatus,
        trip_id
      ],
      (error,result)=>{
        if (error) {
          // eslint-disable-next-line no-console
          console.log('update status  error :', error)
          return res().code(500)
        }

        return res({msg:'Update successfully'});

      })
  } else {

    return res('Somthing Wrong happend').code(500)

  }
}
