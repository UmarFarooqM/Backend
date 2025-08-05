const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
    {
      name:String,
      email:String,
      address:String,
      location:String
    }
)

const recipeModel = mongoose.model("recipe", recipeSchema );
module.exports = recipeModel;


