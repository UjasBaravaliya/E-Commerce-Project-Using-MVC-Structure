const admin = require("../models/adminSchema");

const adminCreate = async (req, res) => {

  const { Admin_id, Admin_name, Email, Password, Dob, Phone_no, Gender } = req.body;

  const adminData = {
    "Admin_id": Admin_id,
    "Admin_name": Admin_name,
    "Email": Email,
    "Password": Password,
    "Dob": Dob,
    "Phone_no": Phone_no,
    "Gender": Gender
  }
  const data = await admin.create(adminData);
  console.log(data);
  res.send(data);
}



const adminGet = async (req, res) => {
  const data = await admin.find();
  console.log(data);
  res.send(data);
}


const adminUpdate = async (req, res) => {
  const data = await admin.updateOne({ _id: req.params.id }, {
    "Admin_id": req.body.Admin_id,
    "Admin_name": req.body.Admin_name,
    "Email": req.body.Email,
    "Password": req.body.Password,
    "Dob": req.body.Dob,
    "Phone_no": req.body.Phone_no,
    "Gender": req.body.Gender
  })
  console.log(data);
  res.send(data);
}


const adminDelete = async (req, res) => {
  const data = await admin.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);

}



module.exports = {
  adminCreate,
  adminGet,
  adminUpdate,
  adminDelete
}