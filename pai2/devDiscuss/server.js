const express = require("express")
const connectToDb = require("./configs/mongoose.config");
const postRouter = require("./routes/posts.routes");
const app = express()
require("dotenv").config();
const PORT = process.env.PORT || 3000;
connectToDb()

app.use(express.json())
app.get("/test",(req,res)=>{
    res.send("this is a test route for the pai2 Evolution")
    console.log("this is a test route")
})
app.use("/api",postRouter)
// app.use("/api", )

app.use((req,res)=>{
    console.log("unapproriate route")
})

app.listen(3000,()=>{
    console.log("app is running in port 3000")
})