const mongoose = require("mongoose")

const connectToDb  = async()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/videoGame")
        console.log("connected to db")
    } catch (error) {
        res.json("error in connecttoDb", error)
    }
}

module.exports = connectToDb