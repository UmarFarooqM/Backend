const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
    {
  title: {type:String, required:[true, "Title is required"]},  
  author: {type:String},
  status: {type:String, default:"available", enum:["available","borrowed","returned"]}, 
  borrowerName: String,
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  overdueFees: Number,  
 
    }
)

const booksModel = mongoose.model("books", booksSchema );
module.exports = booksModel;


