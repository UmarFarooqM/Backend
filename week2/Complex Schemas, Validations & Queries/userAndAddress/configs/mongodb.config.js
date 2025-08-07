const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
        console.log("Connected to DB") ; // should wait until above line gets executed
    }catch(err){
        console.log("Error in Connecting DB");
        console.log(err)
    }
}

module.exports = connectToDB;