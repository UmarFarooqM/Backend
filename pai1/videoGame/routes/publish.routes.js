const express = require("express")
const publisherModel = require("../models/publisher.models")
const { addpublishers, getAllpublishers, getpublishersById, updatepublishersById, deletepublishersById } = require("../controllers/publish.controllers")

const publishRouter = express.Router()

publishRouter.post("", addpublishers)

publishRouter.get("", getAllpublishers)

publishRouter.get("/:id", getpublishersById)

publishRouter.put("/:id", updatepublishersById)

publishRouter.delete("/:id", deletepublishersById)

module.exports = publishRouter