const { getData, addorUpdatetodos } = require("../models/todos.model");


const getAlltodos = (req,res)=>{
    let todos = getData ().todos
  res.status(200).json({ msg: "List of todos", todos }); 
}
  
const addList = (req,res)=>{
    let newtodo = req.body;
    let data = getData().data
  let todos =getData().todos 
  let id = todos[todos.length - 1].id + 1;
  // asisgn this id to newtodo
  newtodo = { ...newtodo, id };
  todos.push(newtodo);
  data.todos = todos 
  //    // update in the DB as well, stringify before pushing
 addorUpdatetodos(data) 
  res.status(201).json({ msg: "New todo Added" }); 
}

const updatelist = (req,res)=>{
    let id = req.params.id;
      let updatedtodo = req.body;
      let data = getData().data
      let todos =getData().todos 
      let index = todos.findIndex((todo) => todo.id == id);
      if (index == -1) {
        res.status(404).json({ msg: "todo Not Found" });
      } else {
        let updatedtodos = todos.map((el, i) => {
          if (el.id == id) {
            return { ...el, ...updatedtodo };
          } else {
            return el;
          }
        });
        data.todos = updatedtodos;
        addorUpdatetodos(data);
        res.status(201).json({ msg: "todo Updated" });
      }
}

const deletelist = (req,res)=>{
    let id = req.params.id;
      let data = getData().data
      let todos =getData().todos 
    
      // check whether id is present,
      let index = todos.findIndex((todo) => todo.id == id);
      if (index == -1) {
        // if no, todo not found
        res.status(404).json({ msg: "todo Not Found" });
      } else {
        // todo is found
        // if yes, upadte the todo
        let updatedtodos = todos.filter((el, i) => {
          return el.id != id;
        });
        // replace with old todo
        data.todos = updatedtodos;
        addorUpdatetodos(data)
        res.status(200).json({ msg: "todo Deleted" });
      }
}
module.exports = {getAlltodos, addList, deletelist,updatelist}