const review = require('../models/reviewSchema');

const reviewCreate = async (req, res) => {

  const { Review_id, Description, User_id, Product_id } = req.body;

  const reviewData = {
    "Review_id": Review_id,
    "Description": Description,
    "User_id": User_id,
    "Product_id": Product_id
  }
  const data = await review.create(reviewData)
  console.log(data);
  res.send(data);
}


const reviewGet = async (req, res) => {
  const data = await review.find();
  console.log(data);
  res.send(data);
}



const reviewUpdate = async (req, res) => {
  const data = await review.updateOne({ _id: req.params.id }, {
    "Review_id": req.body.Review_id,
    "Description": req.body.Description,
    "User_id": req.body.User_id,
    "Product_id": req.body.Product_id
  })
  console.log(data);
  res.send(data);
}


const reviewDelete = async (req, res) => {
  const data = await review.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data)
}



module.exports = {
  reviewCreate,
  reviewGet,
  reviewUpdate,
  reviewDelete
}