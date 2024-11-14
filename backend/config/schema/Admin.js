const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: false,
      unique: false,
    },
    lastname: {
      type: String,
      required: false,
      unique: false,
    },
    executiveRole: {
      type: String,
      required: false,
      unique: false,
    },
    sudoRole: {
      type: String,
      required: false,
      default: "regular",
    },
    onboarding: {
      type: String,
      required: true,
      default: "completed",
    },
    username: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = adminSchema;
