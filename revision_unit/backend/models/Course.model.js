const mongoose = require("mongoose")


const CourseSchema = new mongoose.Schema({
    title:{type:String,require :true},
    description :{type:String},
    category:{type: String},
    price:{enum:["admin"]},
    createdBy:{}
})

const CourseModel =  mongoose.model("Course", CourseSchema);
module.exports = CourseModel;