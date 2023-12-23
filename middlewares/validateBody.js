const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const validate = (req, _, next) => {
    const { body } = req;

    const { error } = schema.validate(body);
    if (error) next(HttpError(400, error.message));

    next();
  };

  return validate;
};

module.exports = validateBody;
