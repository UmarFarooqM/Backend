const mongoose = require("mongoose")

const connectToDB =  async ()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/masaiassignments")
            console.log("connected to db")
    } catch (error) {
        console.log("error in connect to db", error)
    }
     
 
     
}

module.exports = connectToDB