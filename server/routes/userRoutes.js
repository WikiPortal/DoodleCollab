const express = require("express");
const { registerLimiter } = require("../middleware/rateLimiter");
const userExists = require("../middleware/userExists");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { registerValidationRules } = require("../middleware/Validation");
const router = express.Router();

router
  .route("/register")
  .post(userExists, registerLimiter, registerValidationRules, registerUser);
router.route("/login").post(userExists,loginUser);
router.route("/register").get(userExists,getUser);

module.exports = router;
