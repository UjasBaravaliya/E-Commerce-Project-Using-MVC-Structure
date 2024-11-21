const category = require('../models/categorySchema');



// Insert Data
const categoryCreate = async (req, res) => {

  const { Category } = req.body;

  const categoryData = {
    Category: Category
  }
  const data = await category.create(categoryData);
  console.log(data);
  res.send(data);

}



// Display Data
const categoryGet = async (req, res) => {
  const data = await category.find();
  console.log(data);
  res.send(data);
}



// Update Data
const categoryUpdate = async (req, res) => {
  const data = await category.updateOne({ _id: req.params.id }, {
    Category: req.body.Category
  })
  console.log(data)
  res.send(data);
}




// Delete Data
const categoryDelete = async (req, res) => {
  const data = await category.deleteOne({ _id: req.params.id })
  console.log(data);
  res.send(data);

}


module.exports = {
  categoryCreate,
  categoryGet,
  categoryUpdate,
  categoryDelete
}