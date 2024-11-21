const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  "Contact_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Contact",
    require: true
  },
  "Name": {
    type: String,
    require: true
  },
  "Email": {
    type: String,
    require: true
  },
  "Subject": {
    type: String,
    require: true
  },
  "Message": {
    type: String,
    require: true
  }
})


const contactModel = mongoose.model('Contact', contactSchema)

module.exports = contactModel;