const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      name:String,
      category:String,
      price:Number,
      inStock:Boolean,
     
    }
)

const productModel = mongoose.model("product", productSchema)
module.exports = productModel;


