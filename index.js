const express = require('express');
const ujas = express();
const multer = require('multer');
const path = require('path');
// ujas.use(express.json());
// const mongoose = require('mongoose');


const bodyParser = require('body-parser')
ujas.use(bodyParser.urlencoded({ extended: false }));
ujas.use(bodyParser.json());


ujas.use(express.static("./public"))

// Image storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./public/image"), function (error) {
      if (error) {
        throw error;
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname
    cb(null, name, function (error) {
      if (error) {
        throw error;
      }
    })
  }
})

const upload = multer({ storage: storage })






const { db } = require("./database/db");

const users = require('./controllers/userController');
const categorys = require('./controllers/categoryController');
const subcategorys = require('./controllers/subcategoryController');
const products = require('./controllers/productController');
const contacts = require("./controllers/userContactController");
const admins = require("./controllers/adminController");
const sizes = require('./controllers/sizeController');
const colors = require('./controllers/colorController');
const addresss = require('./controllers/addressController');
const reviews = require('./controllers/reviewController');


const { verifyToken } = require('./Middleware/userAuth');
// const { error } = require('console');




// User Api
ujas.post('/inserUserData', users.userCreate);
ujas.get('/getUserData', verifyToken, users.userGet);
ujas.put('/updateUserData/:id', users.userUpdate);
ujas.delete('/deleteUserData/:id', users.userDelete);


// Login Api
ujas.post('/loginData', users.userLogin);

// Send Otp in Email
ujas.post('/sendEmail', users.sendEmail);

//submit otp
ujas.post('/submitOTP', users.submitOTP);

// reset password
ujas.post('/resetPassword', users.resetPassword);



// Category Api
ujas.post('/insertCategoryData', categorys.categoryCreate);
ujas.get('/getCategoryData', categorys.categoryGet);
ujas.put('/updateCategoryData/:id', categorys.categoryUpdate);
ujas.delete('/deleteCategoryData/:id', categorys.categoryDelete);



// Subcategory Api
ujas.post('/insertSubcategoryData', subcategorys.subcategoryCreate);
ujas.get('/getSubcategoryData', subcategorys.subcategoryGet);
ujas.put('/updateSubcategoryData/:id', subcategorys.subcategoryUpdate);
ujas.delete('/deleteSubcategoryData/:id', subcategorys.subcategoryDelete);



// Product Api
ujas.post('/insertProductData', upload.array('image'), products.productCreate);
ujas.get('/getProductData', products.productGet);
ujas.put('/updateProductData/:id', products.productUpdate);
ujas.delete('/deleteProductData/:id', products.productDelete);
ujas.get('/searchProduct', products.searchProduct)


// Contact Api

ujas.post('/contactCreate', contacts.contactCreate);
ujas.get("/contactGet", contacts.contactGet)
ujas.put("/contactUpdate/:id", contacts.contactUpdate);
ujas.delete('/contactDelete/:id', contacts.contactDelete)


// Admin api

ujas.post('/adminCreate', admins.adminCreate);
ujas.get('/adminGet', admins.adminGet);
ujas.put('/adminUpdate/:id', admins.adminUpdate);
ujas.delete('/adminDelete/:id', admins.adminDelete)


// Size Api
ujas.post('/sizeCreate', sizes.sizeCreate);
ujas.get('/sizeGet', sizes.sizeGet);
ujas.put('/sizeUpdate/:id', sizes.sizeUpdate);
ujas.delete('/sizeDelete/:id', sizes.sizeDelete)


// Color Api

ujas.post('/colorCreate', colors.colorCreate);
ujas.get('/colorGet', colors.colorGet);
ujas.put('/colorUpdate/:id', colors.colorUpdate);
ujas.delete('/colorDelete/:id', colors.colorDelete)


// Address Api

ujas.post('/addressCreate', addresss.addressCreate);
ujas.get('/addressGet', addresss.addressGet);
ujas.put('/addressUpdate/:id', addresss.addressUpdate);
ujas.delete('/addressDelete/:id', addresss.addressDelete);


// Review Api
ujas.post('/reviewCreate', reviews.reviewCreate);
ujas.get('/reviewGet', reviews.reviewGet);
ujas.put('/reviewUpdate/:id', reviews.reviewUpdate);
ujas.delete('/reviewDelete/:id', reviews.reviewDelete);


PORT = 5000;
ujas.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});