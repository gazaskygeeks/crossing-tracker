const user = require('../../database/userhelpers.js');
const Boom = require('boom');
const Bcrypt = require('bcrypt');
module.exports = (req, res) => {
  const email = req.payload.email;
  const password = req.payload.password;
  user.getuserbyemail(email, (error, result) => {
    if (error) {
      {
          // eslint-disable-next-line no-console
        console.log('get user by email :',error)
        res().code(500)
      }
    }
    if (result.rows.length > 0) {
      Bcrypt.compare(password, result.rows[0].password, (error, resultHash) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('Bcrypt comapre error  :',error)
          res().code(500)

        }
        if (resultHash) {
          if (result.rows[0].approved === 0) {
            res(Boom.unauthorized('Wait until the admin approved your request'))
          } else {
            req.cookieAuth.set({
              user_id: result.rows[0].user_id,
              user_type: result.rows[0].user_type
            });
            if (result.rows[0].user_type === 2) {
              res({
                message: 'redirect to admin page',
                statusCode: 200,
                usertype: 'admin'
              })
            } else if (result.rows[0].user_type === 3) {
              res({
                message: 'redirect to home page',
                statusCode: 200,
                usertype: 'user'
              })
            } else {
              res({
                message: 'redirect to superAdmin page',
                statusCode: 200,
                usertype: 'superAdmin'
              })
            }
          }
        } else {
          res(Boom.unauthorized('Password is not correct'))
        }
      })
    } else {
      res(Boom.unauthorized('Email is not Exist'))
    }
  })

}
