const express = require("express")
const UserModel = require("../models/user.models")
const mongoose = require("mongoose")
const UserRouter = express.Router()

UserRouter.post("/post/add-user", async (req,res)=>{

    try {
        let newuser = await mongoose.create(req.body)
        res.status(201).json({msg:"user created", newuser})
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"user not created"})
    }
})

UserRouter.get("/get-users/:profilename",  async (req,res)=>{

    try {
        const profileName = req.query
        if(profileName){
        let alluser = await mongoose.find({})
        let filterdata = alluser.map((users)=> users.profiles.profileName==req.params)
        res.json({msg:` ${filterdata}`})
        }
        else{
           let  allusers = await mongoose.find({})
             res.json({msg:"list of users", allusers})
        }

    } catch (error) {
        
    }
})

UserRouter.post("/add-profile/:userId", async (req,res)=>{
    

    try {
        let {userId} = req.params
        let user = await UserModel.findById(userId)  
        let newprofile = req.body
        user.profiles.push(newprofile)
        user.save()
        res.status(201).json(`{msg:"new profile added", ${user.name}}`)
    } catch (error) {
        res.status(404).json({msg:"added profile successfully"})
    }
})

UserRouter.get("/search", async (req,res)=>{

    try {
        let  {name,profile} = req.query
        if(name && profile){
        let users = await UserModel.find(req.query)
        }
        else if(name){
             let users = await UserModel.find(name)
             res.json({msg:"profile  found but user not found"})
        }
        else if(profile){
            let users = await UserModel.find(profile)
              res.json({msg:"user  found but profile not found"})
        }
        else{
            res.json({ "message": "User not found" })
        }
        
    } catch (error) {
        res.json("Error", error)
    }

})

UserRouter.put("/update-profile/:userId/:profileName", async (req,res)=>{

    const {userId, profileName} =  req.params
    try {
        let {newname} = req.body
        let user = await UserModel.findById(userId);

         user.map((user)=> user.profileName).filter((name)=> name.profileName=newname)
       await user.save()
        res.json({msg:"profileName is updated"})
    } catch (error) {
        res.json({msg:"error in updating profileName", error})
    }
})


UserRouter.delete("/delete-profile/:userId/:profileName", async (req,res)=>{

    const {userId, profileName} =  req.params
    try {
        let {newname} = req.body
        let user = await UserModel.findById(userId);

         user.map((user)=> user.profileName).filter((name)=> name.profileName!==name)
       await user.save()
        res.json({msg:"profileName is updated"})
    } catch (error) {
        res.json({msg:"error in updating profileName", error})
    }
})



module.exports = UserRouter