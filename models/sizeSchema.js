const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  "Size_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Size",
    require: true
  },
  "Size_name": {
    type: String,
    require: true
  }
})

const sizeModel = mongoose.model('Size', sizeSchema);

module.exports = sizeModel;