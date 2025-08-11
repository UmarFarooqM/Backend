const express = require("express")
const connectToDb = require("./configs/mongoose.config")
const publishRouter = require("./routes/publish.routes")

const app = express()
connectToDb()

app.use(express.json())
app.get("/test",(req,res)=>{
    res.send("this is a test route")
    console.log("this is a test route")
})
app.use("api/publishers", publishRouter)

// app.use("api/games", )

app.use((req,res)=>{
    console.log("unapproriate route")
})

app.listen(3000,()=>{
    console.log("app is running in port 3000")
})