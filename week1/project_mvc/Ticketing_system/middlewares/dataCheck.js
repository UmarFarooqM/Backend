const dataCheck = (req,res,next)=>{
    /// data is coming from req.body
    const {title,description,priotity,user} = req.body;
    if(!title && !description && !priotity,user){
     res.status(406).json({ "error": "Data insufficient, please provide all required fields" })
    }else{
     next()
    }
  }

  module.exports = dataCheck;