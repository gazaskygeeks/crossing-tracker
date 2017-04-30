const Joi = require('joi');
const signupvalidation = {
  username: Joi.string().min(5).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(255).required(),
  phone: Joi.string().min(6).max(15).required(),
  org_id: Joi.number().integer().min(1).max(2).required()
  // user_type: Joi.number().integer().min(1).max(3).required(),
  // approved: Joi.number().integer().min(0).max(2).required()
}

const loginvalidation = {
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6).max(20).required()
}
const tripvalidation = {
  // user_id: Joi.number().required(),
  tripdate: Joi.required(),
  time:Joi.string().regex(/^(0?[1-9]|1[012])(:[0-5]\d)$/).required(),
  location_from_id: Joi.number().min(1).max(3).required(),
  location_to_id: Joi.number().min(1).max(3).required(),
  passingby: Joi.string().min(4).max(25),
  passpointtime: Joi.string()
    .regex(/^(0?[1-9]|1[012])(:[0-5]\d)$/).required(),
  seatavailable: Joi.number().min(0).max(7).required()
}

module.exports = {
  signupvalidation,
  loginvalidation,
  tripvalidation
}
