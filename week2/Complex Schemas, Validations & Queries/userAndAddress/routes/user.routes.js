const express = require("express");
const UserModel = require("../models/user.model");

const UserRouter = express.Router();

UserRouter.post("/add-user", async (req, res) => {
 
  try {
    let user = await UserModel.create(req.body);
    res.status(200).json({ msg: "User Created", user });
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
});

UserRouter.patch("/add-address/:userId",async (req,res)=>{

  const {userId} = req.params;
  try{
     let user = await UserModel.findById(userId);
     if(!user){
      res.status(404).json({msg:"User Not Found.."})
     }else{
     
      user.address.push(req.body)
      console.log(user.address);
      await user.save()
      res.status(201).json({msg:`Address added to the user ${user.name}`})
     }
  }catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
} )


UserRouter.patch("/add-order/:userId",async (req,res)=>{
  
  const {userId} = req.params;
  try{
     let user = await UserModel.findById(userId);
     if(!user){
      res.status(404).json({msg:"User Not Found.."})
     }else{
      
      user.orders.push(req.body)
      console.log(user.orders);
      await user.save()
      res.status(201).json({msg:`Order added to the user ${user.name}`})
     }
  }catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Something went wrong, please try again later..." });
  }
} )


//

module.exports = UserRouter;
