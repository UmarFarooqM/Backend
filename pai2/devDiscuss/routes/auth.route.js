const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const authMiddleware = require("../middlewares/auth.middleware");
const userModel = require("../models/user.models");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = "not_bacon";
var jwt = require("jsonwebtoken");
const UserRouter = require("../../../week4/Authorization/routes/user.routes");

authRouter.post("/register", async (req, res) => {
  try {
    let { username, password, email } = req.body;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).json({ message: "something went wrong" });
      } else {
        await userModel.create({ username, email, password: hash, role });
        res.status(201).json({ message: "Signup Sucess" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

UserRouter.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      
      res.status(404).json({ message: "User Not Found, Please Signup" });
    } else {
      let hash = user.password; 
      bcrypt.compare(password, hash).then(function (result) {
        if (result == true) {
          var token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY);
          res.status(200).json({ message: "Login Sucesss", token });
        } else {
          res.status(403).json({ message: "Wrong Password" });
        }
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});




module.exports = UserRouter;
