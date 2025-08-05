const fs = require("fs");


const loggerMiddleware = (req,res,next)=>{
    let reqData = `Method: ${req.method} | EndPoint: ${req.url} \n`;
    fs.appendFileSync("../queries.txt", reqData)
    next() 
}

module.exports = loggerMiddleware;
