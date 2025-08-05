
const getPublicmsg  = (req,res)=>{

    res.send({ "message": "This is a public endpoint!" })
}


const limitMsg = (req,res)=>{
        res.send({ "message": "You have access to this limited endpoint!" })
}

module.exports = {getPublicmsg,limitMsg}