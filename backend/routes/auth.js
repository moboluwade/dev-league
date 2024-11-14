require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  Admin,
  RegisteredAdmin,
} = require("../model/CreateModels");
const bcrypt = require("bcryptjs");
const checkAuth = require("../middlewares/auth");

router.get("/validate", checkAuth, async (req, res) => {
  res.status(200).json({ message: "user is Authenticated" });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 12 * 60 * 60 * 1000,
      sameSite: "none",
      secure: true,
    });
    // Send the token in the response
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// LOGOUT AND INVALIDATE JWT TOKEN
router.post("/logout", checkAuth, async (req, res) => {
  res.clearCookie("token", {
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });
  res.status(200).send({ message: "logout successful" });
});

// CHECK IF EMAIL IS AVAILABLE IN THE PERMISSIONS DATABASE, ELSE THROW ERROR
router.post("/validate-email", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await RegisteredAdmin.findOne({
      email,
      onboarding: "completed",
    });
    if (user) {
      // USER EXISTS DATABASE CONFLICT ERROR
      return res
        .status(409)
        .json({ message: "No need to Sign up? Admin User Exists." });
    }
    const allowed = await RegisteredAdmin.findOne({
      email,
      onboarding: "pending",
    });
    console.log("allowed: ", allowed);

    if (allowed) {
      // OK STATUS
      return res
        .status(200)
        .json({ message: `user ${email} is allowed. Continue Signup.` });
    }
    // FORBIDDEN STATUS
    return res
      .status(405)
      .json({ message: "You are not allowed to create an account." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Could not validate email", message: err.message });
  }
});

// CHECK IF SECRET PASSCODE MATCHES CURRENT PASSCODE
router.post("/validate-passcode", async (req, res) => {
  try {
    const { passcode } = req.body;
    const hash = process.env.PASSCODE;
    const validPassword = await bcrypt.compare(passcode, hash);

    if (!validPassword) {
      // WRONG PASSWORD - FORBIDDEN ERROR STATUS
      return res
        .status(405)
        .json({ message: "Wrong password. You do not have relevant access" });
    }
    // WRONG
    return res
      .status(200)
      .json({ message: "Continue Signup. Passcode is correct." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "could not validate passcode", message: err.message });
  }
});

// SIGNUP NEW ADMIN USER AFTER PASSING VALIDATION
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await RegisteredAdmin.findOneAndUpdate(
      {
        email,
        onboarding: "pending",
      },
      { $set: { onboarding: "completed" } },
      { new: true } //Return the updated Document
    );
    if (await admin) {
      // CREATE A NEW USER
      const newAdmin = new Admin({ email: email, password: hashedPassword });
      const savedAdmin = await newAdmin.save();

      // CREATE USER TOKEN ON SIGNUP
      const token = jwt.sign({ userId: savedAdmin._id }, process.env.JWT_SECRET);
      res.cookie("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 12 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
      });

      // OK STATUS
      return res.json({
        message: "Admin created successfully",
        user: savedAdmin,
      });
    }

    return res.status(500).json({
      message: "Admin user account is most likely created ",
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "could not complete signup", message: err.message });
  }
});

module.exports = router;
