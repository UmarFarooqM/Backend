
const fs = require("fs")
const getData = ()=> {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let employees = data.employees;

    return {data, employees}
}


const addOrUpdateemployee = (data)=>{
     fs.writeFileSync("./db.json", JSON.stringify(data));
}

module.exports = {getData, addOrUpdateemployee}