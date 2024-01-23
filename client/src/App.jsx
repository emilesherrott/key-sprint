import React, {useState, useEffect } from "react"
import { io } from "socket.io-client"

const App = () => {
    useEffect(() => {
        const socket = io("http://localhost:3000")

        socket.on("connect", () => console.log("Connected"))
    }, [])
  return (
    <div>App</div>
  )
}

export default App