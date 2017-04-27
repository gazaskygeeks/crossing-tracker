const joi = require('joi');
const signupvalidation = {
  username:joi.string().min(5).max(25).required(),
  email:joi.string().email().required(),
  password :joi.string().min(6).max(255).required(),
  phone : joi.string().min(6).max(15).required(),
  org_id : joi.number().integer().min(1).max(2).required(),
  user_type : joi.string().min(1).max(25).required(),
  approved : joi.number().integer().min(0).max(2).required()
}
const loginvalidation = {}
const tripvalidation = {}


module.exports = {
  signupvalidation,
  loginvalidation,
  tripvalidation
}
