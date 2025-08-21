const mongoose = require("mongoose");


const tagSchema= new mongoose.Schema({
    name: {type:String, required:true,lowerCase:true}
})

const tagModel = mongoose.model("tag", tagSchema)


module.exports = tagModel