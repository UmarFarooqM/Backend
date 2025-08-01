const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json()); // json body parser
// test route

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

app.get("/all-tasks", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;
  res.status(200).json({ msg: "List of tasks", tasks });
});


app.get("/task/:taskId",(req,res)=>{
   let taskId = req.params.taskId;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;
  let index = tasks.findIndex((task) => task.id == taskId);
  if (index == -1) {
    res.status(404).json({ msg: "task Not Found" });
  }else{
    tasks.forEach((el,id)=>{
        if(el.id == taskId){
            res.status(200).json({msg:"task Detail",task: el})
        }
    })
  }
} )


app.get("/task", (req,res)=>{
    let tag = req.query.tag;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;
  let flag = true;
  tasks.forEach((el,i)=>{
    if(el.tag.includes(tag)){
        flag = false
        res.json({msg:"task", task:el})
    }
  })

  if(flag==true){
    res.status(404).json({ msg: "task Not Found" });
  }
   
})

// post request

app.post("/add-task", (req, res) => {
  let newtask = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;

  let id = tasks[tasks.length - 1].id + 1;
  // asisgn this id to newtask
  newtask = { ...newtask, id };
  tasks.push(newtask);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(201).json({ msg: "New task Added" });
});

app.put("/update-task/:id", (req, res) => {
  let id = req.params.id;
  let updatedtask = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;
  // check whether id is present,

  let index = tasks.findIndex((task) => task.id == id);
  if (index == -1) {
    // if no, task not found
    res.status(404).json({ msg: "task Not Found" });
  } else {
    let updatedtasks = tasks.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updatedtask };
      } else {
        return el;
      }
    });
    // replace with old task
    data.tasks = updatedtasks;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(201).json({ msg: "task Updated" });
  }
});

app.delete("/delete-task/:id", (req, res) => {
  let id = req.params.id;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let tasks = data.tasks;
  // check whether id is present,
  let index = tasks.findIndex((task) => task.id == id);
  if (index == -1) {
    // if no, task not found
    res.status(404).json({ msg: "task Not Found" });
  } else {
    let updatedtasks = tasks.filter((el, i) => {
      return el.id != id;
    });
    data.tasks = updatedtasks;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ msg: "task Deleted" });
  }
});

app.listen(5000, () => {
  console.log("server started on port 3000");
});
