const product = require('../models/productSchema');

const productCreate = async (req, res) => {


  try {
    const { Product_id, Product_name, Price, Deposite, Qty, Description, Sub_c_id, Cat_id, User_id, Color_id, Size_id } = req.body;

    const imageArray = [];

    for (let i = 0; i < req.files.length; i++) {
      imageArray[i] = req.files[i].filename;

    }
    const productData = {
      "Product_id": Product_id,
      "Product_name": Product_name,
      "Price": Price,
      Deposite,
      "Qty": Qty,
      "Description": Description,
      "image": imageArray,
      "Sub_c_id": Sub_c_id,
      "Cat_id": Cat_id,
      "User_id": User_id,
      "Color_id": Color_id,
      "Size_id": Size_id
    }

    const data = await product.create(productData);
    console.log(data);
    res.send(data);

  } catch (error) {

    // console.log(error);

    if (error.name === 'ValidationError') {
      // Return the validation error in the response
      return res.status(400).json({ error: error.message });
    }
    // Return general error
    res.status(500).send('Server Error');

  }
}




// Search Product
const searchProduct = async (req, res) => {
  try {

    const search = req.body.search;

    const searchData = await product.find({ "product_name": { $regex: ".*" + search + ".*", $options: "i" } })
    console.log(searchData);

    if (searchData.length > 0) {
      res.status(200).send({ Message: "Product Matched", searchData })
    } else {
      res.status(40).send({ Message: "Product Not Found" })

    }

  } catch (error) {
    res.send(error)
  }
}





const productGet = async (req, res) => {
  const data = await product.find().populate('Sub_c_id');
  console.log(data);
  res.send(data);
}



const productUpdate = async (req, res) => {
  const data = await product.updateOne({ _id: req.params.id }, {
    "Product_id": req.body.Product_id,
    "Product_name": req.body.Product_name,
    "Price": req.body.Price,
    "Deposite": req.body.Deposite,
    "Qty": req.body.Qty,
    "Description": req.body.Description,
    "image": req.body.imageArray,
    "Sub_c_id": req.body.Sub_c_id,
    "Cat_id": req.body.Cat_id,
    "User_id": req.body.User_id,
    "Color_id": req.body.Color_id,
    "Size_id": req.body.Size_id
  })
  console.log(data);
  res.send(data);
}



const productDelete = async (req, res) => {
  const data = await product.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);
}



module.exports = {
  productCreate,
  productGet,
  productUpdate,
  productDelete,
  searchProduct
}

