const size = require('../models/sizeSchema');

const sizeCreate = async (req, res) => {

  const { Size_id, Size_name } = req.body;

  const sizeData = {
    "Size_id": Size_id,
    "Size_name": Size_name
  }
  const data = await size.create(sizeData);
  console.log(data);
  res.send(data);
}



const sizeGet = async (req, res) => {
  const data = await size.find();
  console.log(data);
  res.send(data);
}


const sizeUpdate = async (req, res) => {
  const data = await size.updateOne({ _id: req.params.id }, {
    "Size_id": req.body.Size_id,
    "Size_name": req.body.Size_name
  })
  console.log(data);
  res.send(data);
}

const sizeDelete = async (req, res) => {
  const data = await size.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);

}


module.exports = {
  sizeCreate,
  sizeGet,
  sizeUpdate,
  sizeDelete
}