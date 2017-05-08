const helpers = require('../../database/userhelpers.js');
const mail= require('../../backend/utils.js');
const user = require('../../database/userhelpers.js');

module.exports=(req,res)=>{
  const valid = req.state.sid.user_type;
  if(valid === 2){
    helpers.changestatus(req.payload.email,(err)=>{
      if(err){
        throw err
      }
      mail.sendemail('Admin comfirmation <erezedule@gmail.com>',
        `${req.payload.email}`,
        'Admin accept your registeration',
        'Your registeration was accepted, so you can log in successfully :)', (error, info) => {
          if (error) {
            throw error
          }
          user.getDisApprovedUser((err, users) => {
            const rep = {
              message: 'accept registration',
              er: error,
              info: info,
              result: users.rows,
              statusCode:200
            }
            res(rep)
          });
        })

    })
  }else{
    res({message:'You are not admin',
      statusCode:401})
  }
}
