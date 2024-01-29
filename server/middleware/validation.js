const { body } = require("express-validator");

const registerValidationRules = [
  body("username").notEmpty().withMessage("Username is required!"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must have a minimum of 8 characters!"),
];

module.exports = { registerValidationRules };
