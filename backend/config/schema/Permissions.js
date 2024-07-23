const { string, required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionsSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  session: {
    type: String,
    required: false,
    unique: false,
  }
}, { timestamps: true });

module.exports = PermissionsSchema