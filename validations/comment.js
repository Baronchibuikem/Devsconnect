const Validator = require("validator");
const isEmpty = require("./isEmpty");

// setting up validation for registration form

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.comment = !isEmpty(data.comment) ? data.comment : "";

  if (!Validator.isLength(data.comment, { min: 1, max: 250 })) {
    errors.comment = "Comment must be between 1 and 250 characters";
  }

  if (Validator.isEmpty(data.comment)) {
    errors.comment = "Comment field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
