const dataCheck = (req,res,next)=>{
    const {id,title,author,genre,publishedYear,status,borrowedBy,borrowDate} = req.body;
    if(!title && !author && !genre){
     res.status(406).json({msg:"Wrong Request"})
    }else{
     next()
    }
  }

  module.exports = dataCheck;