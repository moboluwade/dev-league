const express = require("express");
const router = express.Router();
const { Email } = require("../model/CreateModels");
const checkAuth = require("../middlewares/auth");

// Post THE EMAIL
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    // check if the email already exist
    const emailExist = await Email.find({ email: email });
    if (emailExist && emailExist.length > 0) {
      return res.status(400).json({ message: "Email already exist" });
    } else {
      const newEmail = new Email({ email });
      console.log("This works, this gets logged:", newEmail);
      const savedEmail = await newEmail.save();
      res.status(200).json({
        message: "Email sent successfully",
        Email: savedEmail,
        status: "success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error,
      status: "failed",
    });
  }
});

// get all email
// router.get('/', checkAuth, async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const Emails = await Email.find();
    if (!Emails) {
      return res.status(404).json({ message: "Emails not found" });
    }
    res.json({ Emails: Emails });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

// router.delete("/", async (req, res) => {
//   const email = req.body.email;
//   try {
//     const Emails = await Email.deleteOne({email: email});
//     if (!Emails) {
//       return res.status(404).json({ message: "Emails not found" });
//     }
//     res.json({ Emails: Emails });
//   } catch (err) {
//     console.log(err);
//     return res.json(err);
//   }
// });

module.exports = router;
