const express = require("express");
const router = express.Router();
const { RegisteredAdmin, Admin } = require("../model/CreateModels");
const checkAuth = require("../middlewares/auth");
const checkSudoAuth = require("../middlewares/sudoAuth");

// Post THE EMAIL
router.post("/", checkAuth, async (req, res) => {
  try {
    const { email } = req.body;

    // check if the email already exist
    const emailExist = await RegisteredAdmin.find({ email: email });

    if (emailExist && emailExist.length > 0) {
      return res.status(400).json({ message: "Email already exist" });
    } else {
      const newEmail = new RegisteredAdmin({ email });
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
router.get("/", checkSudoAuth, async (req, res) => {
  try {
    const Emails = await RegisteredAdmin.find();

    if (!Emails) {
      console.log({ message: "Emails not found" });
      return res.status(404).json({ message: "Emails not found" });
    }

    res.json({ admins: Emails });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.delete("/", checkSudoAuth, async (req, res) => {
  const email = req.body.email;
  try {
    const Emails = await RegisteredAdmin.deleteOne({ email: email });

    if (!Emails) {
      return res.status(404).json({ message: "Emails not found" });
    }

    res.json({ emails: Emails });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/give-sudo", checkSudoAuth, async (req, res) => {
  try {
    const { emails } = req.body;
    // console.log("Requested emails:", emails);

    // Update the admins with the 'pending' onboarding status and assign sudo
    const result = await Admin.updateMany(
      {
        email: { $in: emails }, // Match any admin whose email is in the provided list
        onboarding: "pending", // Only update admins with "pending" onboarding status
      },
      {
        $set: { isSudo: true }, // Set the 'isSudo' field to true
      }
    );

    if (result.modifiedCount === 0) {
      // No admins were updated, meaning either the emails didn't match or were not in the "pending" state
      return res.status(404).json({
        message:
          "No pending admins found for the provided emails or they already have sudo.",
      });
    }

    // Fetch the updated admins to return their data
    const updatedAdmins = await Admin.find({
      email: { $in: emails }, // Fetch the updated admins using the same emails
      onboarding: "pending",
    });

    // console.log("Updated admins with sudo:", updatedAdmins);

    return res.status(200).json({
      message: "Sudo role assigned successfully to the following admins",
      updatedAdmins: updatedAdmins, // The updated records
    });
  } catch (error) {
    console.error("Error assigning sudo role:", error);
    return res.status(500).json({
      message: "An error occurred while assigning the sudo role",
    });
  }
});

module.exports = router;
