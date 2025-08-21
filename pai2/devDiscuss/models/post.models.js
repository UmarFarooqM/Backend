const mongoose = require("mongoose");


const commentsSchema= new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user"},
    text :{type:String, required:true},
    createdAt:{type:Date}
})
const postSchema= new mongoose.Schema({
    
    title:{type:String,required:true, minlength:5},
    content:{type:String,required:true, minlength:20},
    author:{ type: mongoose.Schema.Types.ObjectId, ref: "user" },
    tags:[{ type: mongoose.Schema.Types.ObjectId, ref: "tags" }],
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    comments:[commentsSchema]

})


const postModel = mongoose.model("post", postSchema)


module.exports = postModel;