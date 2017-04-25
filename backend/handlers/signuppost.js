const hash = require('../utils.js');
const user = require('../../database/userhelpers.js')
module.exports = (req, res) => {

  /*
  1. insert user data into database , if return err (return boom msg email is exist)
  2. else reply signup page
  */
  hash(req.payload.password, function(err, hash) {
    if (err) {
      return err;
    }
    req.payload.password = hash;
    user.createUser( req.payload, (err, result) => {

    })
  });
}
