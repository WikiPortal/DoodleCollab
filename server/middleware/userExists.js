const User = require("../models/userModel");

const userExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    const userExist = User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = userExists;
