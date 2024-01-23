const { Router } = require("express")

const soloController = require("../controllers/solo")

const soloRouter = Router()

soloRouter.get("/easy", soloController.index)

module.exports = soloRouter