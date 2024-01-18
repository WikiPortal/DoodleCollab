const { body } = require("express-validator");

const registerValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must have a minimum of 6 characters!"),
];

module.exports = { registerValidationRules };
