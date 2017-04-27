const dbutils = require('./dbutils.js');

function getuserbyemail(email, cb) {
  const query = 'SELECT * FROM users WHERE email=$1 ';
  dbutils.runQuery(query, [email], cb)
}

function getuserbyusername(username, cb) {
  const query = 'SELECT * From users WHERE username=$1';
  dbutils.runQuery(query, [username], cb)
}

function createuser(data, cb) {
  const query = `insert into users
   (username,
    email,
    password,
    phone,
    org_id,
    user_type,
    approved)
    values ($1, $2, $3, $4, $5, $6,$7)`
  dbutils.runQuery(
    query, [
      data.username,
      data.email,
      data.password,
      data.phone,
      data.org_id,
      data.user_type,
      data.approved
    ], cb);
}
module.exports = {
  getuserbyemail: getuserbyemail,
  getuserbyusername: getuserbyusername,
  createuser: createuser

}
