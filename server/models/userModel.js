const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
});

module.exports = mongoose.model("User", userSchema);
