const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
    {
      title:String,
      description:String,
      status:String,
      dueDate:Date.now()
    }
)

const recipeModel = mongoose.model("recipe", recipeSchema );
module.exports = recipeModel;


