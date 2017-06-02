const user = require('../../database/userhelpers.js');
const hash = require('../backend/hashing.js');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  const user_id = req.payload.user_id;
  const token   = req.payload.token ;
  const password   = req.payload.passowrd;

  user.getuserbyid(user_id,(error,result)=>{
    if (error)
    { // eslint-disable-next-line no-console
      console.log('get user by email Error :',error)
      return res().code(500)
    }
    if (result.rows<=0){
      if (result.rows.length <=0) {
        return res({msg:'user not found'}).code(401)
      }
      const token_db =result.rows[0].token;
      if (!token_db){
        return res({msg:'Link not valid'}).code(401);
      }
      if (token===token_db){
        hash.make(password)
          .then(hsh => {
            user.updatePassword([hsh,user_id],(error,result2)=>{
              if (error)
              { // eslint-disable-next-line no-console
                console.log('get user by email Error :',error)
                return res().code(500)
              }
              const email = result.rows[0].email;

              utiles.sendemail(
                'Site Admin <erezedule@gmail.com>',
                email,
                'Password Reset',
              `Hello,\n\n
              This is a confirmation that the password for your account
              ${email} has just been changed.\n
          `
              ,(error, info) => {
                if (error) {
                     // eslint-disable-next-line no-console
                  console.log('sendemail Error :',error)
                  return res().code(500)
                }
                res({
                  msg: 'Success! Your password has been changed.' })
              });
            })
          })

      }else{
        return res({msg:'You Cant reset passowrd'}).code(401);
      }

    }


  })
}
