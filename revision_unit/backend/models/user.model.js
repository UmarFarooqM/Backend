const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    User:{type:String,require :true},
    email :{type:String},
    password:{type: String},
    role:{enum:["admin"]}
})

const UserModel =  mongoose.model("User", UserSchema);
module.exports = UserModel;