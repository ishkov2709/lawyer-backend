const Joi = require("joi");

const latinCyrillicPattern = /^(?! )[A-Za-z\u00C0-\u024F\u0400-\u04FF ]+(?! )$/;
const phoneNumberPattern = /^\d{1,4}\s?\d{1,4}\s?\d{1,9}$/;

const makeOrderSchema = Joi.object({
  fullName: Joi.string()
    .required()
    .pattern(latinCyrillicPattern)
    .messages({ "string.pattern.base": "{#label} in not valid" }),
  number: Joi.string()
    .required()
    .min(10)
    .pattern(phoneNumberPattern)
    .messages({ "string.pattern.base": "{#label} in not valid" }),
  description: Joi.string(),
});

module.exports = {
  makeOrderSchema,
};
