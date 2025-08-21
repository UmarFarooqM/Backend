require('dotenv').config()
const authmiddleware=(req,res,next)=>{
    try{
        let token=req.headers?.Authorization?.split(' ')[1]
        if(token){
            var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(decoded)
            return res.status(200).send({message:'authentication successfull'})
        }
        next()
    }catch(err){
       res.status(400).send({msg:"somthing went wrong"})
    }
}

const moderatorMiddleware =  (req,res,next)=>{
    try{
        let token=req.headers?.Authorization?.split(' ')[1]
        if(token){
            var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            if(decoded.role=="Moderator"){
                return next()
            }
            return res.status(400).send({msg:"you are not a moderator"})
        }
    }
    catch(err){
       res.status(400).send({msg:"somthing went wrong"})
    }
}
module.exports={
    authmiddleware,
    moderatorMiddleware
}