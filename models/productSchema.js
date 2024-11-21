const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  "Product_id": {
    type: mongoose.Schema.Types.ObjectId, ref: "Product",
    require: true
  },
  "Product_name": {
    type: String,
    required: true
  },
  "Price": {
    type: Number,
    required: true
  },
  "Deposite": {
    type: Number,
    required: true
  },
  "Qty": {
    type: Number,
    required: true
  },
  "Description": {
    type: String,
    required: true
  },
  "image": {
    type: Array,
    required: true,
    validate: [imageLimit, "Add only 3 products images"]
  },
  "Sub_c_id": {
    type: mongoose.Schema.Types.ObjectId, ref: 'subcategory',
    required: true
  },
  "Cat_id": {
    type: mongoose.Schema.Types.ObjectId, ref: 'category',
    required: true
  },
  "User_id": {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  "Color_id": {
    type: mongoose.Schema.Types.ObjectId, ref: 'Color',
    required: true
  },
  "Size_id": {
    type: mongoose.Schema.Types.ObjectId, ref: 'Size',
    required: true
  }
});

// Custom validator to limit the number of images to 4
function imageLimit(value) {
  return value.length <= 3; // Allow up to 3 images
}

// Create the product model
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
