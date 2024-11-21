const address = require('../models/addressSchema');

const addressCreate = async (req, res) => {

  const { Address_id, User_id, City, State, Country, Pincode, Address, Phone_no } = req.body;

  const addressData = {
    "Address_id": Address_id,
    "User_id": User_id,
    "City": City,
    "State": State,
    "Country": Country,
    "Pincode": Pincode,
    "Address": Address,
    "Phone_no": Phone_no
  }
  const data = await address.create(addressData);
  console.log(data);
  res.send(data);
}



const addressGet = async (req, res) => {
  const data = await address.find();
  console.log(data);
  res.send(data);
}


const addressUpdate = async (req, res) => {
  const data = await address.updateOne({ _id: req.params.id }, {
    "Address_id": req.body.Address_id,
    "User_id": req.body.User_id,
    "City": req.body.City,
    "State": req.body.State,
    "Country": req.body.Country,
    "Pincode": req.body.Pincode,
    "Address": req.body.Address,
    "Phone_no": req.body.Phone_no
  })
  console.log(data);
  res.send(data);
}


const addressDelete = async (req, res) => {
  const data = await address.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);

}


module.exports = { addressCreate, addressGet, addressUpdate, addressDelete }