const express = require("express");
const booksModel = require("../models/book.models");


const booksRouter = express.Router();

booksRouter.post("/add-books", async (req, res) => {
 
  try {
    let books = await booksModel.create(req.body);
    res.status(200).json({ msg: "books Created", books });
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
});

booksRouter.put("/:booksId",async (req,res)=>{

  const {booksId} = req.params;
  const newbook = req.body;
  try{
     let books = await booksModel.findByIdAndUpdate(booksId, newbook);
     if(!books){
      res.status(404).json({msg:"books Not Found.."})
     }else{
     
      books.address.push(req.body)
      console.log(books.address);
      await books.save()
      res.status(201).json({msg:`Address added to the books ${books.name}`})
     }
  }catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
} )

booksRouter.delete("/:id", async (req,res)=>{
    const {booksId} =  req.params
    try {
        
        let books = await booksModel.findById(booksId);
       books =  books.filter((book)=> books._id!==booksId)
       await books.save()
        res.json({msg:"book  is deleted"})
    } catch (error) {
        res.json({msg:"error in deletingbook", error})
    }
})


module.exports = booksRouter;
