const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
    {
      
  title: String,  
  author: String,
  status: String, 
  borrowerName: String,
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  overdueFees: Number,  


    }
)

const booksModel = mongoose.model("books", booksSchema );
module.exports = booksModel;


