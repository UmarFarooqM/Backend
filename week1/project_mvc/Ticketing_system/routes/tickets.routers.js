const express = require("express")

const ticketRouter = express.Router()
 const fs = require("fs");
const getData = require("../models/tickets.model");
const addorUpdatetickets = require("../models/tickets.model");
const { getAlltickets, addtickets, updatetickets, deletetickets } = require("../controllers/tickets.controller");

ticketRouter.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

/// get route that reads all the tickets
ticketRouter.get("/all-tickets", getAlltickets );

ticketRouter.post("/add-ticket", addtickets );

ticketRouter.put("/update-ticket/:id", updatetickets);

ticketRouter.delete("/delete-ticket/:id", deletetickets)
  

module.exports = ticketRouter