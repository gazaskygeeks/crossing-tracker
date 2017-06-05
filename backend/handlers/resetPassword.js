const user = require('../../database/userhelpers.js');
const hash = require('../hashing.js');
const utiles = require('../utils.js');
module.exports = (req, res) => {
  const user_id = req.payload.user_id;
  const token   = req.payload.token ;
  const password   = req.payload.password;
  if(!user_id||!token||!password){
    return res({msg:'Somthing Error'}).code(400);
  }

  user.getuserbyid(user_id,(error,result)=>{
    if (error)
    { // eslint-disable-next-line no-console
      console.log('get user by email Error :',error)
      return res().code(500)
    }

    if (result.rows <=0) {
      return res({msg:'user not found'}).code(401)
    }
    const token_db =result.rows[0].resetpasswordtoken;
    if (!token_db){
      return res({msg:'Link not valid'}).code(401);
    }


    if (token===token_db){
      if (password<6){
        return res({msg:'Password too short !'}).code(401);
      }
      hash.make(password)
        .then(hsh => {
          user.updatePassword([hsh,user_id],(error,result2)=>{
            if (error)
            { // eslint-disable-next-line no-console
              console.log('updatePassword Error :',error)
              return res().code(500)
            }
            const email = result.rows[0].email;
            user.setToken(
              {
                resetpasswordtoken:'',
                resetpasswordexpires:'',
                user_id:user_id
              },
              (error,result2)=>{
                utiles.sendemail(
                  'Erezedule | Admin message <erezedule@gmail.com>',
                  email,
                  'Password Reset confirmation',
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
        })
    }else{
      return res({msg:'You Cant reset password'}).code(401);
    }
  })
}
