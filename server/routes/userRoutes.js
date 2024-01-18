const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { registerValidationRules } = require("../middlewares/validation");
const router = express.Router();

router.route("/register").post(registerValidationRules, registerUser);
router.route("/login").post(loginUser);
router.route("/register").get(getUser);

module.exports = router;
