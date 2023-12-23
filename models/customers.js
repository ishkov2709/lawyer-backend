const Joi = require("joi");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const makeOrderSchema = Joi.object({
  email: Joi.string()
    .required()
    .pattern(emailPattern)
    .messages({ "string.pattern.base": "{#label} in not valid" }),
  number: Joi.number().required(),
  description: Joi.string(),
});

module.exports = {
  makeOrderSchema,
};
