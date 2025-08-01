const e = require("express")
const express = require("express")
const fs = require("fs")
const { get } = require("http")
const app = express()

app.use(express.json())

app.post("/add-book", (req,res)=>{

    let new_book = req.body
    let data = JSON.parse(fs.readFileSync("./db.json"), "utf-8")

    
    let books = data.books
    let id = (books[books.length-1].id) + 1;
    new_book = {...new_book, id}
    books.push(new_book)

    data.books = books
    fs.writeFileSync("./db.json", JSON.stringify(data))

    res.send({msg:'new book is added', data})
})

app.get("/all-books", (req,res)=>{

    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let allbooks = data.books

    res.send({msg:"list of books", allbooks})
})
//req params by id
app.get("/book/:id", (req,res)=>{
   
     /// :id is params which is variable 
       // console.log(req.params)
       let id = req.params.id;
        // read the course from db.json
      let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
      let books = data.books;
      // check whether id is present,
    
      let index = books.findIndex((book) => Number(book.id) == Number(id));
      if (index == -1) {
        // if no, book not found
        res.status(404).json({ msg: "Course Not Found" });
      }else{
        books.forEach((el,id)=>{
            if(el.id == id){
                res.status(200).json({msg:"Course Detail",book: el})
            }
        })
      }
 
})

app.put("/update-books/:id", (req,res)=>{

    let id = req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json"), "utf-8")
    let books = data.books

    let new_book = req.body

    let index = books.findIndex((ele)=> ele.id == id)

    if(index==-1){
        res.send({msg:"invalid id"})
    }
    else{
        
        let updatedbooks = books.map((ele)=>{
            if(ele.id == id){
                return {...ele,...new_book}
            }
            else{
                return ele
            }
        })

        data.books = updatedbooks

        fs.writeFileSync("./db.json", JSON.stringify(data))

        res.send({msg:"update successfull", updatedbooks})

    }
});

app.delete("/delete-book/:id", (req, res) => {
  let id = req.params.id;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let books = data.books;
  let index = books.findIndex((book) => book.id == id);
  if (index == -1) {
    res.status(404).json({ msg: "book Not Found" });
  } else {
    let updatedbooks = books.filter((el, i) => {
      return el.id != id;
    });
    data.books = updatedbooks;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ msg: "book Deleted" });
  }
});


//query

app.get("/books/search", (req,res)=>{

    let query = req.query.author

    let books = JSON.parse(fs.readFileSync("./db.json"),"utf-8" ).books
    let flag = false
    books.map((ele)=>{
        if(ele.author.toLowerCase().includes(query.toLowerCase())){
            flag = true
            res.send(ele)
        }
    })
    if(flag ==false){
        res.json({ "message": "No books found" }
)
    }

app.use((req,res)=>{
    res.send({ "error": "404 Not Found" }
)
})
})


app.listen(5000, ()=>{
    console.log("book storageapi")
})
