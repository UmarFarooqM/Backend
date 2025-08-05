const mongoose = require("mongoose");
const connectToDB = async ()=>{
   try{
    await mongoose.connect("mongodb://127.0.0.1:27017/receipemanage")
    
   }catch(err){
   
    console.log(err)
   }
}

module.exports = connectToDB;