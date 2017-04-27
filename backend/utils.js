const Bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const hash = function(pass, cb) {
  Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      throw err
    }
    Bcrypt.hash(pass, salt, cb);
  });
}
module.exports = hash;
