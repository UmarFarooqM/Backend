const express = require("express")
const apiRouter = require("./routes/api.routes")

const app = express()
app.use(express.json())


app.use("/api",apiRouter )

 
app.listen(3000, ()=>{
    console.log("port 3000 is working")
})