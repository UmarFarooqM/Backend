const express = require("express")
const todoRouter = require("./routes/todo.routes")

const app = express()
app.use(express.json());
app.use("/todos", todoRouter);

app.listen(8000, ()=>{ 
    console.log("mvc model controller view")
})