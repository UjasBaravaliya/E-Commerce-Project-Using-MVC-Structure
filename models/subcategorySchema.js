const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  Category_id: {
    type: String,
    require: true
  },
  subCategory: {
    type: String,
    require: true
  }
})

const subcategoryModel = mongoose.model('subcategory', subcategorySchema);

module.exports = subcategoryModel;