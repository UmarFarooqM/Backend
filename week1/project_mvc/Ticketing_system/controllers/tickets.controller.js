const { getData, addorUpdatetickets } = require("../models/tickets.model");

const getAlltickets = (req,res)=>{
    let tickets = getData ().tickets
  res.status(200).json({ msg: "tickets of tickets", tickets }); 
}
  
const addtickets = (req,res)=>{
    let newtodo = req.body;
    let data = getData().data
  let tickets =getData().tickets 
  let id = tickets[tickets.length - 1].id + 1;
  // asisgn this id to newtodo
  newtodo = { ...newtodo, id };
  tickets.push(newtodo);
  data.tickets = tickets 
  //    // update in the DB as well, stringify before pushing
 addorUpdatetickets(data) 
  res.status(201).json({ msg: "New todo Added" }); 
}

const updatetickets = (req,res)=>{
    let id = req.params.id;
      let updatedtodo = req.body;
      let data = getData().data
      let tickets =getData().tickets 
      let index = tickets.findIndex((todo) => todo.id == id);
      if (index == -1) {
        res.status(404).json({ msg: "todo Not Found" });
      } else {
        let updatedtickets = tickets.map((el, i) => {
          if (el.id == id) {
            return { ...el, ...updatedtodo };
          } else {
            return el;
          }
        });
        data.tickets = updatedtickets;
        addorUpdatetickets(data);
        res.status(201).json({ msg: "todo Updated" });
      }
}

const deletetickets = (req,res)=>{
    let id = req.params.id;
      let data = getData().data
      let tickets =getData().tickets 
    
      // check whether id is present,
      let index = tickets.findIndex((todo) => todo.id == id);
      if (index == -1) {
        // if no, todo not found
        res.status(404).json({ msg: "todo Not Found" });
      } else {
        // todo is found
        // if yes, upadte the todo
        let updatedtickets = tickets.filter((el, i) => {
          return el.id != id;
        });
        // replace with old todo
        data.tickets = updatedtickets;
        addorUpdatetickets(data)
        res.status(200).json({ msg: "todo Deleted" });
      }
}
module.exports = {getAlltickets, addtickets, deletetickets,updatetickets}