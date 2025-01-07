const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register User
router.post(
  "/register",
  [
    body("name", "Name is required").notEmpty(),
    body("email", "Email is invalid").isEmail(),
    body("password", "Password must be 6 characters or longer").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "Email already in use" });

      const user = await User.create({ name, email, password });
      const token = generateToken(user._id);

      res.status(201).json({ _id: user._id, name: user.name, email: user.email, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Login User
router.post(
  "/login",
  [
    body("email", "Email is invalid").isEmail(),
    body("password", "Password is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid credentials" });

      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

      const token = generateToken(user._id);

      res.status(200).json({ _id: user._id, name: user.name, email: user.email, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
