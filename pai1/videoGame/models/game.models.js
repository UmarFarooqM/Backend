const mongoose = require("mongoose")


const gameSchema = new mongoose.Schema({
    title:{type:String,require :true},
    genre :{type:String, enum:["RPG","Action","Adventure","Strategy","Sports"]},
   
    releaseDate:{type:new Date},
    publisher:{type:mongoose.Schema.Types.ObjectId, ref:"publisher"}
})

const gameModel =  mongoose.model("game", gameSchema)

module.exports = gameModel;