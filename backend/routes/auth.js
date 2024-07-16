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
    res.cookie('token', token, { httpOnly: true, path: '/', maxAge: 12 * 60 * 60 * 1000, sameSite: 'none', secure: true });
    // Send the token in the response
    res.status(200).json({ message: "Login successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// LOGOUT AND INVALIDATE JWT TOKEN
router.post("/logout", authMiddleware, async (req, res) => {
  res.clearCookie('token', { path: '/', secure: true, httpOnly: true, sameSite: 'none' })
  res.status(200).send({ message: "logout successful" })
});


// verify email of the right 
router.post("/verify-email", async (req, res) => {
  const { username } = req.body;
  const user = await Admin.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "Email is not registered by lead. Check email?" });
  }
  res.status(200).json({ message: "Email is allowed." });
})

router.post("/verify-passcode", async (req, res) => {
  const { passcode } = req.body;
  const hash = process.env.PASSCODE;
  const validPassword = await bcrypt.compare(passcode, hash);
  console.log(validPassword)
  // console.log("password: ", validPassword);
  if (!passcode) {
    return res.status(404).json({ message: "Wrong password" });
  }
  res.status(200).json({ message: "correct password" });
})


//  create a new admin
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

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