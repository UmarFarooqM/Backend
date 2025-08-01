const fs = require("fs");
const express = require("express");
const bookRouter = require("./routes/book.routes");
const borrowRouter = require("./routes/borrow.routes");
const loggerMiddleware = require("./middlewares/logger");

const app = express();
app.use(express.json()); // json body parser
// test route
app.use(loggerMiddleware);

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

/// book routes
app.use("/books", bookRouter);

/// borrow routes
app.use("/borrow", borrowRouter);



// Undefined/Unhandles Routes
app.use((req,res)=>{
  res.status(404).json({msg:"This Request is Not Found"})
})

app.listen(3000, () => {
  console.log("server started on port 3000");
});
