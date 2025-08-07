const express = require("express");
const bookModel = require("../models/book.model");
const borrowlimit = require("../middlewares/borrowlimit")

const bookRouter = express.Router();

bookRouter.get("/books", async (req,res)=>{
    try{
        const {status, title} = req.query;
         let filter ={}
         if(status){
            filter.status = status
         }
         if(title){
            filter.title = {$regex:title, $options: "i"}
         }
        let books = await bookModel.find(filter); ///library/books?status=borrowed&title=harry
        res.status(200).json({message:"book List retrived successfully", books, total:books.length})
    }catch(err){
        res.status(500).json({message:"Something went wrong, could you please try again later"})
    }
})


bookRouter.post("/add-book", async (req,res)=>{
    
    let book = await bookModel.create(req.body)
    
    res.status(201).json({message:"book is added", book}); 
})

bookRouter.patch("/borrow/:bookId", borrowlimit, async (req, res) => {
  const { bookId } = req.params;
  const { borrowerName } = req.body;

  const book = await bookModel.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const borrowDate = new Date();
  const dueDate = new Date();
  dueDate.setDate(borrowDate.getDate() + 14);

  const updatedBook = {
    status: "borrowed",
    borrowerName,
    borrowDate,
    dueDate,
  };

  await bookModel.findByIdAndUpdate(bookId, updatedBook, { new: true });

  res.status(201).json({ message: "Book borrowed successfully" });
});


bookRouter.patch("/return/:id", async (req,res)=>{
    let {id} = req.params
    let book = await bookModel.findById(id)
    if(!book){
        return res.status(404).json({msg:"book not found"})
    }
    let {dueDate} = book
    let returnDate = new Date();
    let  overdueFees =0
    if(returnDate>dueDate){
        let diffTime = returnDate-dueDate
        const diffDays = Math.ceil(diffTime/(1000*60*60*24))
        let feeperDay = 5 //rupees
        overdueFees = diffDays * feeperDay
    }
    let returnbook = {returnDate, status:"available",overdueFees}
    await bookModel.findByIdAndUpdate(id,returnbook, {new:true})

    res.status(201).json({msg: "Book  returned successfully", returnDetails: returnbook})

})



bookRouter.delete("/delete-book/:bookId", borrowlimit ,async (req,res)=>{
    try{
        const {bookId} = req.params;
    const book = await bookModel.findById(bookId);

    if(!book ){
      return res.status(404).json({message:"book is Not Found"})
    }
    else if(book.status === "borrowed"){
        return res.status(400).json({msg:"Borrowed books cannot be Deleted"})
    }
    
       await bookModel.findByIdAndDelete(bookId)
       res.status(200).json({message:"book is Deleted"})
    
    }catch(err){
        res.status(500).json({message:"Something went wrong to delete"})
    }
})


module.exports = bookRouter;