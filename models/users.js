// blogpost.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// BlogPost Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: "Enter your username",
    unique: true
  },
  password: {
      type: String,
      required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  email: {
      type: String
  },
  updated: {
    type: Date,
    default: Date.now
  },
});
const User = mongoose.model('User', UserSchema);