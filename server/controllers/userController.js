const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");
// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // if (!name || !email || !password) {
    //   return res.status(400).json({ message: "Please enter all fields" });
    // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid inputs",
        error: errors,
      });
    }

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        message: "User registered",
      });
    } else {
      throw new Error("Invalid user data");
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check for user email
    const user = await User.findOne({ email });
    if (!user) {
      return res.staus(401).json({ error: "Invalid credentials" });
    }
    const PassOk = await bcrypt.compare(password, user.password);
    if (!PassOk) {
      return res.staus(401).json({ error: "Invalid password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get user
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
};

module.exports = { registerUser, loginUser, getUser };
