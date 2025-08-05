const express = require("express");
const recipeModel = require("../models/recipe.model");


const recipeRouter = express.Router();

recipeRouter.get("/", async (req,res)=>{
    try{
        let recipes = await recipeModel.find({}); 
        res.status(200).json({message:"recipe List", recipes})
    }catch(err){
        res.status(500).json({message:"Something went wrong, could you please try again later"})
    }
})


recipeRouter.post("/add-recipe", async (req,res)=>{
    let recipe = await recipeModel.create(req.body)
    res.status(201).json({message:"recipe is added", recipe}); 
})

recipeRouter.patch("/update-recipe/:recipeId", async (req,res)=>{
     const {recipeId} = req.params;
     let recipe = await recipeModel.findById(recipeId);
     if(!recipe){
        res.status(404).json({message:"recipe  is Not Found"})
     }else{
        await recipeModel.findByIdAndUpdate(recipeId, req.body)
        res.status(201).json({message:"recipe is  Updated successfully"})
     }
})



recipeRouter.delete("/delete-recipe/:recipeId", async (req,res)=>{
    try{
        const {recipeId} = req.params;
    let recipe = await recipeModel.findById(recipeId);
    if(!recipe){
       res.status(404).json({message:"recipe is Not Found"})
    }else{
       await recipeModel.findByIdAndDelete(recipeId)
       res.status(200).json({message:"recipe is Deleted"})
    }
    }catch(err){
        res.status(500).json({message:"Something went wrong to delete"})
    }
})


module.exports = recipeRouter;