const express = require("express");
const booksModel = require("../models/book.models");
const { addbook, updatebook, deletebook } = require("../controllers/book.controller");


const booksRouter = express.Router();

booksRouter.post("/add-books", addbook);

booksRouter.put("/:booksId",updatebook)

booksRouter.delete("/:id", deletebook)


module.exports = booksRouter;
