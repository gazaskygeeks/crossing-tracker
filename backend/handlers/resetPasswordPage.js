const user = require('../../database/userhelpers.js');
module.exports = (req, res) => {
  const params  = req.query;
  const user_id = params.user_id;
  const token   = params.token;
  user.getToken(user_id,(error,result)=>{
    if (error)
    { // eslint-disable-next-line no-console
      console.log('getToken Error :',error)
      return res().code(500)
    }
    if (result.rows.length <=0) {

      return res({msg:'Link not valid'}).code(401);
    }
    const token_db =result.rows[0].resetpasswordtoken;
    if (!token_db){

      return res({msg:'Link not valid'}).code(401);
    }
    if (token===token_db){
      const timeNow = Date.now() + 3600000;
      const orgTime=result.rows[0].resetpasswordexpires
      const diff= timeNow-orgTime;
      var minutes = 1000 * 60;
      var hours = minutes * 60;
      const time=Math.round(diff/hours);
      if (time>=1){
        return res({msg:'Token Expired'}).code(401)
      }
      return res({msg:'You Can reset password'})
    }else{
      return res({msg:'You Cant reset password'}).code(401);
    }
  })
}
