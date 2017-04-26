const user = require('../../database/userhelpers.js');
const Boom = require('boom');
const Bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const email = req.payload.email;
  const password = req.payload.password;
  user.getuserbyemail(email, (err, result) => {
    if (err) {
      throw err
    }
    if (result.rows.length > 0) {

      Bcrypt.compare(password, result.rows[0].password, (err, resultHash) => {
        if (resultHash) {
          if(result.rows[0].approved === 0){
            res(Boom.unauthorized('Wait until the admin approved your request'))
          }else {
            res({message:'redirect to home page'}).code(200)
          }
        } else {
          res(Boom.unauthorized('Password is not correct'))
        }
      })
    }
    else {
      res(Boom.unauthorized('Email is not Exist'))
    }
  })

}
