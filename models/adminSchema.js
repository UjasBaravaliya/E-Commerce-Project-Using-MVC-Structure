const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  "Admin_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Admin",
    require: true
  },
  "Admin_name": {
    type: String,
    require: true
  },
  "Email": {
    type: String,
    require: true
  },
  "Password": {
    type: String,
    require: true
  },
  "Dob": {
    type: String,
    require: true
  },
  "Phone_no": {
    type: Number,
    require: true
  },
  "Gender": {
    type: String,
    require: true
  }
})

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;