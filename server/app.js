const http = require("http")
const express = require("express")
const socketIo = require("socket.io")

const logger = require("./middleware/logger")

const app = express()
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



module.exports = server