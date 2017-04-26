const Joi = require('joi');
const signupvalidation = {}
const loginvalidation = {
  email:Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6).max(20).required()
}
const tripvalidation = {}


module.exports = {
  signupvalidation,
  loginvalidation:loginvalidation,
  tripvalidation
}
