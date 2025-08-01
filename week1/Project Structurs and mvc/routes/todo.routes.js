const express = require("express")

const todoRouter = express.Router()
 const fs = require("fs");
const getData = require("../models/todos.model");
const addorUpdatetodos = require("../models/todos.model");
const { getAlltodos, addList, updatelist, deletelist } = require("../controllers/todos.controller");

todoRouter.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

/// get route that reads all the todos
todoRouter.get("/all-todos", getAlltodos );

todoRouter.post("/add-todo", addList );

todoRouter.put("/update-todo/:id", updatelist);

todoRouter.delete("/delete-todo/:id", deletelist)
  

module.exports = todoRouter