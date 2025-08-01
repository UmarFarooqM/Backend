// install - express - done
// import

const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json()); // json body parser
// test route

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

/// get route that reads all the tickets
app.get("/all-tickets", (req, res) => {
  // read the db.json file
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  // console.log(data.tickets);
  let tickets = data.tickets;
  res.status(200).json({ msg: "List of tickets", tickets });
});


// path params
// get ticket by id

app.get("/ticket/:ticketId",(req,res)=>{
    /// :id is params which is variable 
   // console.log(req.params)
   let ticketId = req.params.ticketId;
    // read the ticket from db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tickets = data.tickets;
  // check whether id is present,

  let index = tickets.findIndex((ticket) => ticket.id == ticketId);
  if (index == -1) {
    // if no, ticket not found
    res.status(404).json({ msg: "ticket Not Found" });
  }else{
    tickets.forEach((el,id)=>{
        if(el.id == ticketId){
            res.status(200).json({msg:"ticket Detail",ticket: el})
        }
    })
  }
} )

// query params 
/// get ticket by title through query paramter 

app.get("/ticket", (req,res)=>{
    // ?title=Intro To Express
    // { title: 'Intro to Express' }

    let title = req.query.title;
   // console.log(req.query)
        // read the ticket from db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tickets = data.tickets;
  let flag = true;
  tickets.forEach((el,i)=>{
    if(el.title.includes(title)){
        flag = false
        res.json({msg:"ticket", ticket:el})
    }
  })

  if(flag==true){
    res.status(404).json({ msg: "ticket Not Found" });
  }
   
})

// post request

app.post("/add-ticket", (req, res) => {
  let newticket = req.body;
  //console.log(newticket)
  // i will be getting ticket details in the body
  // push the ticket deatils into the db.json
  // first read the data
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tickets = data.tickets;
  //    // tickets is an array,push the body into the array
  /// create id

  let id = tickets[tickets.length - 1].id + 1;
  // asisgn this id to newticket
  newticket = { ...newticket, id };
  tickets.push(newticket);
  //    // update in the DB as well, stringify before pushing
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(201).json({ msg: "New ticket Added" });
});

// upadate , how will i update?? I need a reference data, that is id
// updation or deletion should happen through id
app.put("/update-ticket/:id", (req, res) => {
  // we need a id
  // id is a param, that is a party of req,
  // req.param ==> { id: '1' }
  let id = req.params.id;
  let updatedticket = req.body;
  //console.log(req.params)
  // read the ticket from db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tickets = data.tickets;
  // check whether id is present,

  let index = tickets.findIndex((ticket) => ticket.id == id);
  if (index == -1) {
    // if no, ticket not found
    res.status(404).json({ msg: "ticket Not Found" });
  } else {
    // ticket is found
    // if yes, upadte the ticket
    let updatedtickets = tickets.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updatedticket };
      } else {
        return el;
      }
    });
    // replace with old ticket
    data.tickets = updatedtickets;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(201).json({ msg: "ticket Updated" });
  }
});

app.delete("/delete-ticket/:id", (req, res) => {
  // we need a id
  // id is a param, that is a party of req,
  // req.param ==> { id: '1' }
  let id = req.params.id;
  //console.log(req.params)
  // read the ticket from db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tickets = data.tickets;
  // check whether id is present,
  let index = tickets.findIndex((ticket) => ticket.id == id);
  if (index == -1) {
    // if no, ticket not found
    res.status(404).json({ msg: "ticket Not Found" });
  } else {
    // ticket is found
    // if yes, upadte the ticket
    let updatedtickets = tickets.filter((el, i) => {
      return el.id != id;
    });
    // replace with old ticket
    data.tickets = updatedtickets;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ msg: "ticket Deleted" });
  }
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
