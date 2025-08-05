const express = require("express");
const bookModel = require("../models/book.model");


const bookRouter = express.Router();

bookRouter.get("/", async (req,res)=>{
    try{
        let books = await bookModel.find({}); 
        res.status(200).json({message:"book List", books})
    }catch(err){
        res.status(500).json({message:"Something went wrong, could you please try again later"})
    }
})


bookRouter.post("/add-book", async (req,res)=>{
    let book = await bookModel.create(req.body)
    res.status(201).json({message:"book is added", book}); 
})

bookRouter.patch("/update-book/:bookId", async (req,res)=>{
     const {bookId} = req.params;
     let book = await bookModel.findById(bookId);
     if(!book){
        res.status(404).json({message:"book  is Not Found"})
     }else{
        await bookModel.findByIdAndUpdate(bookId, req.body)
        res.status(201).json({message:"book is  Updated successfully"})
     }
})



bookRouter.delete("/delete-book/:bookId", async (req,res)=>{
    try{
        const {bookId} = req.params;
    let book = await bookModel.findById(bookId);
    if(!book){
       res.status(404).json({message:"book is Not Found"})
    }else{
       await bookModel.findByIdAndDelete(bookId)
       res.status(200).json({message:"book is Deleted"})
    }
    }catch(err){
        res.status(500).json({message:"Something went wrong to delete"})
    }
})


module.exports = bookRouter;