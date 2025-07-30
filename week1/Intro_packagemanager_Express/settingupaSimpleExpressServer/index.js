const express = require('express')

const app = express()

app.get("/home", (req,res)=>{
    res.send("This is home page route")
})
app.get("/contactus", (req,res)=>{
     res.send("Contact us at contact@contact.com")
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})