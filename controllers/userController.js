const user = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privetKey = "#U$j$a$s@";
const nodemailer = require('nodemailer');


// Insert Data
const userCreate = async (req, res) => {

  const { Name, Email, Password, City, State, Country, Pincode, Address, PhoneNumber, Gender, Age, Dob } = req.body;


  // Name Validation
  if (!/^[a-zA-Z]+$/.test(Name)) {
    return res
      .status(401)
      .send({ message: "Name must contain only letters" });
  }

  // Validation for email: Simple format validation
  if (!/^\S+@\S+\.\S+$/.test(Email)) {
    return res.status(401).send({ message: "Invalid email format" });
  }

  // Validation for password: At least 6 characters
  if (Password.length < 6) {
    return res
      .status(401)
      .send({ message: "Password must be at least 6 characters long" });
  }

  // Validation for mobile: Only numeric characters allowed and must be 10 digits long
  if (!/^\d{10}$/.test(PhoneNumber)) {
    return res.status(401).send({
      message: "Mobile number must contain exactly 10 numeric digits",
    });
  }

  const bpass = await bcrypt.hash(Password, 12);
  console.log(bpass);


  const userData = {
    Name: Name,
    Email: Email,
    Password: bpass,
    City: City,
    State: State,
    Country: Country,
    Pincode: Pincode,
    Address: Address,
    PhoneNumber: PhoneNumber,
    Gender: Gender,
    Age: Age,
    Dob: Dob
  }
  const data = await user.create(userData);
  console.log('------>', data);
  res.send(data);
}



// login Api
const userLogin = async (req, res) => {

  try {

    const { Email, Password } = req.body;


    if (!/^\S+@\S+\.\S+$/.test(Email)) {
      return res.status(401).send({ message: "Invalid email format" });
    }

    // Validation for password: At least 6 characters
    if (Password.length < 6) {
      return res
        .status(401)
        .send({ message: "Password must be at least 6 characters long" });
    }

    const loginUser = await user.findOne({ Email: Email });
    // console.log(loginUser);

    if (!loginUser) {
      res.status(401).send({ message: "Email is not valid!" });
    }

    console.log(loginUser);


    const userPassword = await bcrypt.compare(Password, loginUser.Password)

    console.log(userPassword);


    if (userPassword) {

      const token = jwt.sign({ Email: loginUser.Email, Password: loginUser.Password }, privetKey, { expiresIn: '1h' });

      res.status(200).send({ message: "Login successfully!", data: loginUser, token: token })
    } else {
      res.status(404).send({ message: "Password incorrect!" })
    }

  } catch (error) {
    res.send(error);
  }
}


// OTP Api

const sendEmail = async (req, res) => {

  const otp = Math.floor(100000 + Math.random() * 900000);

  const { Email } = req.body;
  console.log(Email);


  const emailOTP = await user.findOne({ Email: Email });
  // console.log(emailOTP);

  if (!emailOTP) {
    res.status(500).send("Email not found");
  }

  const saveOTP = await user.findByIdAndUpdate({ _id: emailOTP._id }, { Otp: otp }, { new: true })
  console.log(saveOTP);


  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ujasbaravaliya4411@gmail.com',
      pass: 'vzai ttqq gecb hpst'
    }
  });

  const mailOptions = {
    from: 'ujasbaravaliya4411@gmail.com',
    to: Email,
    subject: 'Sending Email using Node.js',
    text: String(otp),
    html: `<h1>Welcome</h1><p>${otp}</p>`
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send("Somthing went wrong");
    } else {
      res.status(200).send({ Message: "Otp send", info, saveOTP });
    }
  });
}



// Submit otp api
const submitOTP = async (req, res) => {
  try {

    const { Email, otp } = req.body;

    const EmailOTP = await user.findOne({ Email: Email });

    if (EmailOTP.Otp === otp) {
      res.status(200).send("OTP Matched");

    } else {
      res.status(401).send("Wrong OTP");
    }

    // console.log(EmailOTP);

  } catch (error) {
    res.send(error);
  }
}



// Reset password Api
const resetPassword = async (req, res) => {
  try {

    const { Email, newPassword } = req.body;

    const EmailFind = await user.findOne({ Email: Email });
    // console.log(EmailFind);
    const bpass = await bcrypt.hash(newPassword, 12);

    if (EmailFind) {

      const updatePassword = await user.findByIdAndUpdate({ _id: EmailFind._id }, { Password: bpass }, { new: true });

      if (updatePassword) {
        res.status(200).send("Password Updated...");
      } else {
        res.status(400).send("Password not updated...");
      }

    } else {
      res.status(500).send("Server Error");
    }

  } catch (error) {
    res.status(401).send(error)
  }
}


// Display Data
const userGet = async (req, res) => {
  const data = await user.find();
  console.log(data);
  res.send(data);
}


// Update Data
const userUpdate = async (req, res) => {
  const data = await user.updateOne({
    _id: req.params.id
  },
    {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
      City: req.body.City,
      State: req.body.State,
      Country: req.body.Country,
      Pincode: req.body.PhoneNumber,
      Address: req.body.Address,
      PhoneNumber: req.body.PhoneNumber,
      Gender: req.body.Gender,
      Age: req.body.Age,
      Dob: req.body.Dob
    })
  console.log(data);
  res.send(data);
}


// Delete Data
const userDelete = async (req, res) => {
  const data = await user.deleteOne({ _id: req.params.id })
  console.log(data);
  res.send(data);
}



module.exports = {
  userCreate,
  userGet,
  userUpdate,
  userDelete,
  userLogin,
  sendEmail,
  submitOTP,
  resetPassword
}