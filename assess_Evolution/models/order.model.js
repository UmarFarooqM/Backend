const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
      name:String,
      category:String,
      price:Number,
      inStock:Boolean,
     
    }
)

const orderModel = mongoose.model("order", orderSchema)
module.exports = orderModel;



