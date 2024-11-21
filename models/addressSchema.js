const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  "Address_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Address",
    require: true
  },
  "User_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    require: true
  },
  "City": {
    type: String,
    require: true
  },
  "State": {
    type: String,
    require: true
  },
  "Country": {
    type: String,
    require: true
  },
  "Pincode": {
    type: Number,
    require: true
  },
  "Address": {
    type: String,
    require: true
  },
  "Phone_no": {
    type: Number,
    require: true
  }
})


const addressModel = mongoose.model('Address', addressSchema);

module.exports = addressModel;