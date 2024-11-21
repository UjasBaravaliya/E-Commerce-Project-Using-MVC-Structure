const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
    trim: true
  },
  Email: {
    type: String,
    require: true,
    trim: true
  },
  Password: {
    type: String,
    require: true,
    trim: true
  },
  City: {
    type: String,
    require: true,
    trim: true
  },
  State: {
    type: String,
    require: true,
    trim: true
  },
  Country: {
    type: String,
    require: true,
    trim: true
  },
  Pincode: {
    type: Number,
    require: true,
    trim: true
  },
  Address: {
    type: String,
    require: true,
    trim: true
  },
  PhoneNumber: {
    type: Number,
    require: true,
    // trim: true
  },
  Gender: {
    type: String,
    require: true,
    trim: true
  },
  Age: {
    type: Number,
    require: true,
    trim: true
  },
  Dob: {
    type: String,
    require: true,
    trim: true
  },
  Otp: {
    type: Number,
    default: 0
  }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;