const express = require("express");

const borrowRouter = express.Router();

borrowRouter.get("/all-borrows", (req, res) => {
  res.status(200).json({ msg: "List of borrows" });
});

borrowRouter.post("/add-borrow", (req, res) => {
  res.status(201).json({ msg: "borrow Added" });
});

borrowRouter.put("/update-borrow/:id", (req, res) => {
  res.status(201).json({ msg: "borrow Updated" });
});

borrowRouter.delete("/delete-borrow/:id", (req, res) => {
  res.status(201).json({ msg: "borrow deleted" });
});
module.exports = borrowRouter;
