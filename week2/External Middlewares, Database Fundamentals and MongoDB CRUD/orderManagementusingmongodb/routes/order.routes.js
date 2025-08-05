const express = require("express")
const orderModel = require("../models/library.model")

const orderRouter = express.Router()

orderRouter.get("/all-orders", async (req,res)=>{
        try {
            let order_status =  req.query
            let orders =  await orderModel.find(order_status) 
            res.status(200).json({msg :"order list", orders})
        } catch (error) {
            res.status(500).json({msg:"something went wrong please try again later"})
            
        }
})

orderRouter.post("/add-order", async (req,res)=>{

   try {
     let orders =  await orderModel.create(req.body)
 
     res.status(201).json({msg:"order added", orders})
   } catch (error) {
    console.log(error)
    res.send("msg : post is not working", error)
   }
})

 
orderRouter.patch("/update-order/:orderId", async (req,res)=>{
    const {orderId} = req.params
    let order = await orderModel.findById(orderId)

    if(!order){
        res.status(404).json({msg:"user not found"})
    }
    else{
       let updateorder= await orderModel.findByIdAndUpdate(orderId, req.body, {new:true})
        res.status(201).json({msg:"order updated", order:updateorder})
    }
})

orderRouter.delete("/delete-order/:orderId", async (req,res)=>{
    const {orderId} = req.params
    if(!order){
        res.status(404).json({msg:"user not found"})
    }
    else{
        await orderModel.findByIdAndDelete(orderId, req.body)
        res.status(201).json({msg:"order updated"})
    }
 
})





module.exports = orderRouter