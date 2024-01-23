const http = require("http")
const express = require("express")
const socketIo = require("socket.io")

const cors = require("cors")
const logger = require("./middleware/logger")

const soloRouter = require("./routers/solo")

const app = express()

app.use(cors())
app.use(logger)

const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {
    console.log("Client connected")
})

app.use("/solo", soloRouter)

module.exports = server