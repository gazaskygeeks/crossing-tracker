const dbutils = require('./dbutils.js');

function getuserbyemail (email,cb){
  dbutils.select('users',`email=${email}`,cb);
}
function getuserbyusername (username,cb){
  dbutils.select('users',`username=${username}`,cb)
}
function createuser (data,cb){

  dbutils.insert('users',data,cb);
}
module.exports = {
  getuserbyemail:getuserbyemail,
  getuserbyusername:getuserbyusername,
  createuser:createuser

}
