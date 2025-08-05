const express = require("express");
const taskModel = require("../models/task.model");


const taskRouter = express.Router();

taskRouter.get("/", async (req,res)=>{
    try{
        let tasks = await taskModel.find({}); 
        res.status(200).json({message:"task List", tasks})
    }catch(err){
        res.status(500).json({message:"Something went wrong, could you please try again later"})
    }
})


taskRouter.post("/add-task", async (req,res)=>{
    let task = await taskModel.create(req.body)
    res.status(201).json({message:"task is added", task}); 
})

taskRouter.patch("/update-task/:taskId", async (req,res)=>{
     const {taskId} = req.params;
     let task = await taskModel.findById(taskId);
     if(!task){
        res.status(404).json({message:"task  is Not Found"})
     }else{
        await taskModel.findByIdAndUpdate(taskId, req.body)
        res.status(201).json({message:"task is  Updated successfully"})
     }
})



taskRouter.delete("/delete-task/:taskId", async (req,res)=>{
    try{
        const {taskId} = req.params;
    let task = await taskModel.findById(taskId);
    if(!task){
       res.status(404).json({message:"task is Not Found"})
    }else{
       await taskModel.findByIdAndDelete(taskId)
       res.status(200).json({message:"task is Deleted"})
    }
    }catch(err){
        res.status(500).json({message:"Something went wrong to delete"})
    }
})


module.exports = taskRouter;