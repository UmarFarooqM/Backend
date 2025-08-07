const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const UserRouter = require("../routes/user.routes");

const app = express();
app.use(express.json()) 
connectToDB()
/// test route
app.get("/test", (req,res)=>{
    res.status(200).json({msg:"This is test route"})
})
/// User Routes
app.use("/users", UserRouter);

// Handling undefined routes
app.use((req,res)=>{
    res.status(404).json({msg:"This request is not found...."})
})
app.listen(3000, ()=>{
    console.log("Server started...")
})

