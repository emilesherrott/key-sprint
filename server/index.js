require('dotenv').config()

const server = require("./app")
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Port up and running on port: ${port}`)
})