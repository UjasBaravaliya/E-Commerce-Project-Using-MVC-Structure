const subcategory = require('../models/subcategorySchema');


const subcategoryCreate = async (req, res) => {

  const { Category_id, subCategory } = req.body;
  const subcategoryData = {
    Category_id: Category_id,
    subCategory: subCategory
  }

  const data = await subcategory.create(subcategoryData);
  console.log(data);
  res.send(data);
}



const subcategoryGet = async (req, res) => {
  const data = await subcategory.find();
  console.log(data);
  res.send(data);
}



const subcategoryUpdate = async (req, res) => {
  const data = await subcategory.updateOne({ _id: req.params.id }, {
    Category_id: req.body.Category_id,
    subCategory: req.body.subCategory
  })
  console.log(data);
  res.send(data);
}



const subcategoryDelete = async (req, res) => {
  const data = await subcategory.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);

}



module.exports = {
  subcategoryCreate,
  subcategoryGet,
  subcategoryUpdate,
  subcategoryDelete
}