const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  "Color_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Color",
    require: true
  },
  "Color_code": {
    type: String,
    require: true
  }
})

const colorModel = mongoose.model("Color", colorSchema);

module.exports = colorModel;