//we need to database interaction
const fs = require('fs')

const getData= ()=>{
     let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  // cons ole.log(data.todos);
  let todos = data.todos;
  return { data, todos}
}

const addorUpdatetodos = (data)=>{
     fs.writeFileSync("./db.json", JSON.stringify(data));

} 

module.exports = {getData,addorUpdatetodos}