const mongoose = require("mongoose")


const connectToDB =  async ()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/validations");
        console.log("connect to DB")
    } catch (error) {
        console.log("error in connection of Db", error)
    }
}

module.exports = connectToDB