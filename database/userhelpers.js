const dbutils = require('./dbutils.js');
const hash = require('../backend/hashing.js');

function getuserbyemail(email, cb) {
  const query = 'SELECT * FROM users WHERE email=$1 ';
  dbutils.runQuery(query, [email], cb)
}

function getuserbyusername(username, cb) {
  const query = 'SELECT * From users WHERE username=$1';
  dbutils.runQuery(query, [username], cb)
}
function changestatus(email, cb) {
  const query = `UPDATE users
SET approved=1 WHERE email=$1 `
  dbutils.runQuery(query, [email], cb)
}

function createuser(data, cb) {
  hash.make(data.password)
    .then(hsh => {
      const query = `INSERT INTO users
    (
      username,
      email,
      password,
      phone,
      org_id
    )
    values
    (
      $1, $2, $3, $4, $5
    )
    `;
      dbutils.runQuery(
        query, [
          data.username,
          data.email,
          hsh,
          data.phone,
          data.org_id
        ], cb);
    });
}

module.exports = {
  getuserbyemail: getuserbyemail,
  getuserbyusername: getuserbyusername,
  createuser,
  changestatus

}
