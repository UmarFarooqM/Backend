const express = require("express")
const UserRouter = require("./routes/user.routes")


const app = express()

app.use(express.json())







app.use("/users", UserRouter)

app.use((req,res)=>{
    console.log("plz add routes properly")
})
app.listen(3000, ()=>{
    console.log("connect to port 3000")
})