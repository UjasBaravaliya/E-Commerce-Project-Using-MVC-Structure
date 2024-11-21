const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  Category: {
    type: String,
    require: true
  }
})

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel