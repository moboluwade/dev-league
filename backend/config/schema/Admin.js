const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  sudoRole: {
    type: String,
    required: true
  },
  executiveRole: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = adminSchema