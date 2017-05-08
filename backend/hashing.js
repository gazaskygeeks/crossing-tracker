const Bcrypt = require('bcrypt');

const make = (str) => {
// export function make(str) {
  return new Promise((resolve, reject) =>
    // Generate hash's random salt
    Bcrypt.genSalt(10, (error, salt) => {

      if (error) {
        // eslint-disable-next-line no-console
        console.log('Bcrypt Error :',error)
        return reject(error);
      }

      // Now, with the given salt, generate the hash
      Bcrypt.hash(str, salt, (error, hash) => {
        if (error) { return reject(error); }

        // Hash generated successfully!
        return resolve(hash);
      });
    })

  );
}

const compare = (str, hash) => {
// export function compare(str, hash) {
  return new Promise((resolve, reject) =>
    Bcrypt.compare(str, hash, (error, result) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('Bcrypt Error :',error)
        return reject(error);
      }      return result ? resolve() : reject();
    })
  );
}

module.exports = {
  make,
  compare
}
