const express = require("express")
const limiter = require("../middlewares/rate.limiter")
const { getPublicmsg, limitMsg } = require("../controllers/api.controllers")
const apiRouter = express.Router()


apiRouter.get("/public", getPublicmsg)

apiRouter.get("/limited", limiter , limitMsg)



module.exports = apiRouter