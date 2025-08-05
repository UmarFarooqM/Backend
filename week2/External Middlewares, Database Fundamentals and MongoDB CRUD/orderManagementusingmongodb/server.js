

const express = require("express")
const orderRouter = require("./routes/order.routes")
const connectToDB = require("./config/mongodb.config")

const app = express()
connectToDB()
app.use(express.json()) // 
app.use("/orders", orderRouter)

app.listen(5000, ()=>{
    console.log("server started")
})
