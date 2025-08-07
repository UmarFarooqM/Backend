const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const UserRouter = require("./routes/user.routes");

const app = express();
app.use(express.json()) ///body parser middleware
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


// step 1: basic express setup
// step 2: connecting mongodb with nodejs
// step 3: creating schema and model
// step 4: create routes/controllers and test in Postman