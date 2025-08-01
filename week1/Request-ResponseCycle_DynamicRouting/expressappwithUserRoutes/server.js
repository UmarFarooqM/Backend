const express = require('express')

const app = express()

app.use(express.json())

app.get('/users/got',(req,res)=>{
    res.json({ "id": 1, "name": "John Doe", "email": "john@example.com" })
})

app.get("/users/list", (req,res)=>{
    res.send([
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
  { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
]
)
})

app.use((req,res)=>{
    res.status(404).send("404 NOT FOUND")

})

app.listen(3000, ()=>{
    console.log("port is successed")
})