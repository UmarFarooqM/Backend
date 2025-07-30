const fs = require("fs")

function readFileData(){
    fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }

    if(data){
        console.log("This is Initial File Content")
        console.log(data)
    }
})
}


async function appendFileData(){
  
    fs.readFile("./data.txt", "utf-8", (err,olddata)=>{

        if(err){
            console.log("Error", err)
        }

        const newData = olddata + "This is Appended data ";

        fs.writeFile("./data.txt", newData, (err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("File append successfull")
            }
        })
    })
      

     

}
module.exports = {readFileData,appendFileData}