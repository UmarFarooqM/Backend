const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const taskRouter = require("./routes/task.routes");


connectToDB()

const app = express();

app.use(express.json());

app.use("/tasks", taskRouter)

app.listen(5000, ()=>{
    console.log("Server Started for ecommerce....")
})