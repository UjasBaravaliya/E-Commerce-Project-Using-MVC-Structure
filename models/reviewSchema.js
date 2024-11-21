const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  "Review_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Review",
    require: true
  },
  "Description": {
    type: String,
    require: true
  },
  "User_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    require: true
  },
  "Product_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Product",
    require: true
  }
})

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel;