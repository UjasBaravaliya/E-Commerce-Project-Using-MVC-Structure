const contact = require("../models/userContactSchema");

const contactCreate = async (req, res) => {

  const { Contact_id, Name, Email, Subject, Message } = req.body;

  const contactData = {
    "Contact_id": Contact_id,
    "Name": Name,
    "Email": Email,
    "Subject": Subject,
    "Message": Message
  }

  const data = await contact.create(contactData);
  console.log(data);
  res.send(data);
}


const contactGet = async (req, res) => {
  const data = await contact.find();
  console.log(data);
  res.send(data);
}


const contactUpdate = async (req, res) => {
  const data = await contact.updateOne({ _id: req.params.id }, {
    "Contact_id": req.body.Contact_id,
    "Name": req.body.Name,
    "Email": req.body.Email,
    "Subject": req.body.Subject,
    "Message": req.body.Message
  })
  console.log(data);
  res.send(data);
}


const contactDelete = async (req, res) => {
  const data = await contact.deleteOne({ _id: req.params.id });
  console.log(data);
  res.send(data);
}

module.exports = {
  contactCreate,
  contactGet,
  contactUpdate,
  contactDelete
}