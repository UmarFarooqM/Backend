const express = require("express");
const postModel = require("../models/post.models");
const authMiddleware = require("../middlewares/auth.middleware");
const { addpost, getpost, getpostbyId, deletepostbyid } = require("../controllers/posts.controllers");
const postRouter = express.Router();
postRouter.post("/posts", authMiddleware, moderatorMiddleware, addpost)
postRouter.get("/posts",authMiddleware,  moderatorMiddleware , getpost )
postRouter.get("/posts/:postId", getpostbyId )
postRouter.delete("/posts/:postId",  deletepostbyid)


// postRouter.post("/posts/:postId/comments", authMiddleware, ,(req,res)=>{

//     try {
        
//     } catch (error) {
//                 res.status(500).json({msg:"Something went wrong"})

//     }
// })


module.exports =postRouter;
