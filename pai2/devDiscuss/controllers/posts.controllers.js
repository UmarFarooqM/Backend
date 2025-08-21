const postModel = require("../models/post.models");

const addpost = async (req,res)=>{
    try{
     let post = await postModel.create({...req.body, userId:req.user});
     res.status(200).json({message:"post Added", post})
    }catch(err){
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getpost =  async(req,res)=>{
    
    try{
        let posts = await postModel.find({userId:req.user});
        res.status(200).json({message:"posts List",posts})
       }catch(err){
           res.status(500).json({ message: "Something went wrong" });
       }
}

const getpostbyId =  async (req,res)=>{

    try {
        let postId= req.params
        let singlePost = await postModel.findById(postId);
        res.status(200).json({mes:"post details ", singlePost})
    } catch (error){
    res.status(500).json({ message: "Something went wrong" });
    }
}


const deletepostbyid =   async (req,res)=>{
    try{
        const {postId} = req.params;
    let post = await postModel.findById(postId);
    if(!post){
       res.status(404).json({msg:"post Not Found"})
    }else{
       await postModel.findByIdAndDelete(postId)
       res.status(200).json({msg:"post Deleted"})
    }
    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
}



module.exports = {
    addpost,
    getpost,
    getpostbyId,
    deletepostbyid
}