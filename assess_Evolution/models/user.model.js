const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
      name:String,
      email:String,
      address:String,
      location:String
    }
)

const UserModel = mongoose.model("User", userSchema );
module.exports = UserModel;


