
/*global process*/
require('env2')('./.env');
const helpers = require('../../database/userhelpers.js');
const mail= require('../../backend/utils.js');
const user = require('../../database/userhelpers.js');
module.exports=(req,res)=>{
  const valid = req.state.sid.user_type;
  if(valid === 2){
    helpers.changestatus(req.payload.email,(error)=>{
      if(error){
        // eslint-disable-next-line no-console
        console.log('changestatus Error :',error)
        return res().code(500)
      }
      mail.sendemail(`Erezedule | Admin comfirmation
        <${process.env.GMAIL_USER}>`,
        `${req.payload.email}`,
        'Welcome to Erezedule!',
        `Your registration request has been approved.
        Please use this link to log in (^_^):\n
        https://crossing-tracker.herokuapp.com`
        , (error, info) => {
          if (error) {
            // eslint-disable-next-line no-console
            console.log('sendemail Error :',error);
            return res().code(500)
          }
          user.getDisApprovedUser((error, users) => {
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
