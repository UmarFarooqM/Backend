const mongoose = require("mongoose")


const booksSchema = new mongoose.Schema({
    title:{type:String,require :true},
    genre :{type:String, enum:["Fiction","Science","Biography"]},
    author:{type:String},
    price:{type:Number},
    description:{type:String},
    createdAt:{type:new Date},
    publishedYear:{type: Number}
})

const booksModel =  mongoose.model("books", booksSchema);

module.exports = booksModel;