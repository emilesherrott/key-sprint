import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ChallengePage = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => console.log("Connected"));
  }, []);


  return <div>ChallengePage</div>;
};

export default ChallengePage;
