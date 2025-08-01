const express = require("express");
const { getAllbooks, addbook, updatebookById, deletebookById, getbookById, getbookByQuery } = require("../controllers/book.controller");
const dataCheck = require("../middlewares/dataCheck");


const bookRouter = express.Router();
bookRouter.get("/all-books",getAllbooks );

bookRouter.put("/update-book/:id",updatebookById );

//delete book
bookRouter.delete("/delete-book/:id",deletebookById );

// path params
// get book by id
bookRouter.get("/book/:bookId", getbookById);

// query params
/// get book by title through query paramter
bookRouter.get("/book", getbookByQuery);
 
bookRouter.post("/add-book",dataCheck,addbook );

module.exports = bookRouter;
