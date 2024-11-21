const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const db = mongoose.connect('mongodb://localhost:27017/E-Commerces', (err) => {

  if (err) {
    console.log("Database not connected!");

  } else {
    console.log("Database connected successfully!");

  }

});


module.exports = { db };