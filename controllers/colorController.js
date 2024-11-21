const color = require('../models/colorSchema');



const colorCreate = async (req, res) => {

  const { Color_id, Color_code } = req.body;

  const colorData = {
    "Color_id": Color_id,
    "Color_code": Color_code
  }
  const data = await color.create(colorData);
  console.log(data);
  res.send(data);
}



const colorGet = async (req, res) => {
  const data = await color.find();
  console.log(data);
  res.send(data);
}

const colorUpdate = async (req, res) => {
  const data = await color.updateOne({ _id: req.params.id }, {
    "Color_id": req.body.Color_id,
    "Color_code": req.body.Color_code
  })
  console.log(data);
  res.send(data);
}


const colorDelete = async (req, res) => {
  const data = await color.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);

}



module.exports = {
  colorCreate,
  colorGet,
  colorUpdate,
  colorDelete
}