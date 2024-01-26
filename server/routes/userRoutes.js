const express = require("express");
const { registerLimiter } = require("../middleware/rateLimiter");
const userExists = require("../middleware/userExists");
const {
  registerUser,
  loginUser,
  getUser,
  validateToken
} = require("../controllers/userController");
const { registerValidationRules } = require("../middleware/Validation");
const router = express.Router();

router
  .route("/register")
  .post(registerLimiter, registerValidationRules, registerUser)
  .get(userExists, getUser);

router.route("/login").post(userExists, loginUser);
router.route("/validateToken").get(validateToken);

module.exports = router;
