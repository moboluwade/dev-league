const express = require("express");
const adminSchema = require("../config/schema/Admin");
const PermissionsSchema = require("../config/schema/Permissions");
const { Permissions } = require("../model/CreateModels");
const router = express.Router();

// GET: Fetch all admins with permissions
router.get("/", async (req, res) => {
  console.log("I'm hit");
  try {
    const admins = await Permissions.find(); // Use the model here
    console.log("I'm hit:", admins);
    return res.status(200).json({ admins: admins });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return res.status(500).json({ error: "Failed to fetch admins" });
  }
});

// POST: Create a new admin with permission
router.post("/", async (req, res) => {
  try {
    const email = await req.body.email;
    console.log("email:", email);

    // Check if the email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if the admin already exists
    const existingAdmin = await Permissions.findOne({ email: email }); // Use the model
    console.log("existingAdmin:", existingAdmin);
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Create a new admin
    const newAdmin = new Permissions({
      email,
    });

    // Save the admin to the database
    await newAdmin.save();

    return res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    console.error("Error creating admin:", error);
    return res.status(500).json({ error: "Failed to create admin" });
  }
});

// DELETE: Delete an admin
router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    // Delete from Permissions collection
    const deletedAdmin = await Permissions.deleteOne({ email }); // Use the model
    if (deletedAdmin.deletedCount === 0) {
      return res.status(404).json({ error: "Admin not found" });
    }

    // Also delete from the adminSchema collection if needed
    // await Admin.deleteOne({ email }); // Uncomment if needed

    return res
      .status(200)
      .json({ message: "Admin deleted successfully", admin: deletedAdmin });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return res.status(500).json({ error: "Failed to delete admin" });
  }
});

module.exports = router;
