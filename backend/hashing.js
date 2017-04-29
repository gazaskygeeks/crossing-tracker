const Bcrypt = require('bcrypt');

const make = (str) => {
// export function make(str) {
  return new Promise((resolve, reject) =>
    // Generate hash's random salt
    Bcrypt.genSalt(10, (err, salt) => {

      if (err) { return reject(err); }

      // Now, with the given salt, generate the hash
      Bcrypt.hash(str, salt, (err, hash) => {
        if (err) { return reject(err); }

        // Hash generated successfully!
        return resolve(hash);
      });
    })

  );
}

const compare = (str, hash) => {
// export function compare(str, hash) {
  return new Promise((resolve, reject) =>
    Bcrypt.compare(str, hash, (err, result) => {
      if (err) { return reject(err); }
      return result ? resolve() : reject();
    })
  );
}

module.exports = {
  make,
  compare
}
