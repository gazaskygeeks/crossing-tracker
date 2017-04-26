const joi = require('joi');
const signupvalidation = {}
const loginvalidation = {}
const tripvalidation = {
  user_id:joi.number().required(),
  tripdate:joi.required(),
  time:joi.string().regex(/^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/).required(),
  location_from_id:joi.number().min(1).max(3).required(),
  location_to_id:joi.number().min(1).max(3).required(),
  passingby:joi.string().min(4).max(25),
  passpointtime:joi.string()
  .regex(/^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/).required(),
  seatavailable:joi.number().min(0).max(7).required()
}
module.exports = {
  signupvalidation,
  loginvalidation,
  tripvalidation
}
