const jwt = require('jsonwebtoken');
const privetKey = "#U$j$a$s@";

//Verify User Token

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    await jwt.verify(token, privetKey, (err) => {
      if (err) {
        res.send("User unauthorization");
      } else {
        next();
      }
    })

  } catch (error) {
    res.send(error);
  }
}


module.exports = { verifyToken }