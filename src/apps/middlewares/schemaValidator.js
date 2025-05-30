const { Validator, SchemaError } = require("jsonschema");
const { schema } = require("../models/users");

const v = new Validator();

const schemaValidator = (schema) => (req, res, next) => {
  const result = v.validate(req.body, schema);
  if (!result.valid) {
    const messageError = [];

    for (const item of result.errors) {
      messageError.push(item.message.replace('"', "").replace('"', ""));
    }
    return res.status(401).send({
      SchemaError: messageError,
    });
  }
  next();
};

module.exports = schemaValidator;
