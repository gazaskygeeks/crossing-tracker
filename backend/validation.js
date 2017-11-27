const Joi = require('joi');
const signupvalidation = {
  username: Joi.string().min(5).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(255).required(),
  phone: Joi.string().regex(/^\d+$/).min(6).max(15).required(),
  org_id: Joi.number().integer().min(1).required()
}
const loginvalidation = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(255).required(),
}
const tripvalidation = {
  tripdate: Joi.required(),
  time:Joi.required(),
  location_from: Joi.number().min(1).required(),
  location_to: Joi.number().min(1).required(),
  details: Joi.string().min(3).max(255).allow(''),
  available_seats: Joi.number().min(0).required(),
  duration: Joi.number().required(),
}
const editTripValidation = {
  trip_id:Joi.number().required(),
  tripdate: Joi.required(),
  time:Joi.required(),
  location_from: Joi.number().min(1).required(),
  location_to: Joi.number().min(1).required(),
  details: Joi.string().min(3).max(255).allow(''),
  available_seats: Joi.number().min(0).required(),
  duration: Joi.number().required()
}


module.exports = {
  signupvalidation,
  loginvalidation,
  tripvalidation,
  editTripValidation
}
