require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/Admin');
const bcrypt = require('bcryptjs');

// LOGIN THE USER AND SEND A TOKEN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user  = await User .findOne({username});
    if (!user) {
      return res.json({ message: "Invalid username or password" });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "Invalid username or password" });
    }

    // Create a token
    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.cookie('token', token, { httpOnly: true });

    // Send the token in the response
    res.json({ message: "Login successful" , token , user });
   

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


          //  crete a new admin
router.post("/admin-create", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user already exists
      const userExists = await User.findOne ({ username });

      if (userExists) {
        return res.json({ message: "User already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({ username, password: hashedPassword, isAdmin: true });
      const savedUser = await newUser.save();
      const protecteduser = savedUser.select('-password')

      // Send a positive response
      res.json({ message: "User created successfully", user: protecteduser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }


  });


  module.exports = router;