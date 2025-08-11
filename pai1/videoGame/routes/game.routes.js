const express = require("express")
const gameModel = require("../models/game.models")
const { addgames, getAllgames, getgamesById, updategamesById, deletegamesById } = require("../controllers/game.controllers")

const gameRouter = express.Router()

gameRouter.post("",  addgames)

gameRouter.get("", getAllgames)

gameRouter.get("/:id", getgamesById )

gameRouter.put("/:id", updategamesById)

gameRouter.delete("/:id",  deletegamesById)



module.exports = gameRouter