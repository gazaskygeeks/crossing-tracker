const user = require('../../database/userhelpers.js');
const crypto = require('crypto');
const utiles = require('../utils.js');
module.exports = (req, res) => {

  if(!req.payload){
    return res({msg:'No email found'}).code(401)
  }
  const email = req.payload.email;
  user.getuserbyemail(email,(error,result)=>{
    if (error)
    { // eslint-disable-next-line no-console
      console.log('get user by email Error :',error)
      return res().code(500)
    }

    if (result.rows.length <=0) {
      return res({msg:'Email not found'})
    }
    else {
      crypto.randomBytes(20, function(err, buf) {
        const token = buf.toString('hex');
        const resetPasswordExpires = Date.now() + 3600000;
        user.setToken(
          {
            resetPasswordToken:token,
            resetPasswordExpires:resetPasswordExpires,
            user_id:result.rows[0].user_id
          },
          (error,result2)=>{
            if (error) {
               // eslint-disable-next-line no-console
              console.log('setToken Error :',error)
              return res().code(500)
            }
            const email = result.rows[0].email;
            const user_id = result.rows[0].user_id;
            utiles.sendemail(
              'Site Admin <erezedule@gmail.com>',
              email,
              'Password Reset',
            `You are receiving this because you
             (or someone else) have requested
             the reset of the password for your account.\n\n
             Please click on the following link,
             or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset/?user_id=${user_id}&token=${token} \n\n
             If you did not request this, please ignore this email
             and your password will remain unchanged.\n`
            ,(error, info) => {
              if (error) {
                   // eslint-disable-next-line no-console
                console.log('sendemail Error :',error)
                return res().code(500)
              }
              res({
                msg: 'An e-mail has been sent to your email with further instructions.'})
            });
          })
      })
    }
  })
}
