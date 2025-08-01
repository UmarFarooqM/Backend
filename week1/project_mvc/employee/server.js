const fs = require("fs");
const express = require("express");
const employeeRouter = require("./routes/employee.routes");
const lectureRouter = require("./routes/lecture.routes");
const loggerMiddleware = require("./middlewares/logger");

const app = express();
app.use(express.json()); // json body parser
// test route
app.use(loggerMiddleware);

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

/// employee routes
app.use("/employees", employeeRouter);


app.use((req,res)=>{
  res.status(404).json({msg:"This Request is Not Found"})
})

app.listen(3000, () => {
  console.log("server started on port 3000");
});
