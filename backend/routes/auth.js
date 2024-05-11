require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Admin } = require('../model/CreateModels')
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middlewares/auth')

// LOGIN THE USER AND SEND A TOKEN

router.get("/validate", authMiddleware, async (req, res) => {
  res.status(200).json({ message: 'user is Authenticated' });
})

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,);
    res.cookie('token', token, { httpOnly: true, path: '/', maxAge: 12 * 60 * 60 * 1000});
    // Send the token in the response
    res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// LOGOUT AND INVALIDATE JWT TOKEN
router.post("/logout", authMiddleware, async (req, res) => {
  res.clearCookie('token')
  res.status(200).send({ message: "logout successful" })
});

//  crete a new admin
router.post("/admin-create", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    // Check if the user already exists
    const userExists = await Admin.findOne({ username });

    if (userExists) {
      return res.json({ message: "Admin already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newAdmin = new Admin({ username, password: hashedPassword, isAdmin: true });
    const savedAdmin = await newAdmin.save();

    // Send a positive response
    res.json({ message: "Admin created successfully", user: savedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;