const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registeredAdminSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"], // Regex validation
  },
  onboarding: {
    type: String,
    enum: ["pending", "completed"], // restricts values to "pending" or "completed"
    default: "pending", // sets the default to "pending"
  },
  sudoRole: {
    type: String,
    enum: ["regular", "sudoAdmin"], // restricts values to "regular" or "sudo"
    default: "regular",
  },
});

module.exports = registeredAdminSchema;
