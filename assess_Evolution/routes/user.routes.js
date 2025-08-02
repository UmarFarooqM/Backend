const express = require("express");
const UserModel = require("../models/user.model");


const UserRouter = express.Router();

UserRouter.get("/", async (req,res)=>{
    try{
        let users = await UserModel.find({}); 
        res.status(200).json({message:"User List", users})
    }catch(err){
        res.status(500).json({message:"Something went wrong, could you please try again later"})
    }
})


UserRouter.post("/add-user", async (req,res)=>{
    let user = await UserModel.create(req.body)
    res.status(201).json({message:"User is added", user}); 
})

UserRouter.patch("/update-user/:userId", async (req,res)=>{
     const {userId} = req.params;
     let user = await UserModel.findById(userId);
     if(!user){
        res.status(404).json({message:"User  is Not Found"})
     }else{
        await UserModel.findByIdAndUpdate(userId, req.body)
        res.status(201).json({message:"User is  Updated successfully"})
     }
})



UserRouter.delete("/delete-user/:userId", async (req,res)=>{
    try{
        const {userId} = req.params;
    let user = await UserModel.findById(userId);
    if(!user){
       res.status(404).json({message:"User is Not Found"})
    }else{
       await UserModel.findByIdAndDelete(userId)
       res.status(200).json({message:"User is Deleted"})
    }
    }catch(err){
        res.status(500).json({message:"Something went wrong to delete"})
    }
})


module.exports = UserRouter;