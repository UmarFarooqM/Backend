const mongoose = require("mongoose")


const publisherSchema = new mongoose.Schema({
    name:{type:String,require :true,unique:true},
    location :{type:String},
    yearEstablished:{type:Number, min:1950}
})

const publisherModel =  mongoose.model("publisher", publisherSchema)

module.exports = publisherModel;

