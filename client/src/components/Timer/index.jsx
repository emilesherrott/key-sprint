import React, { useEffect } from 'react'

import "./Timer.css"

const Timer = ({ time, setTime, timeStarted, setTimeFinished }) => {

    useEffect(() => {
        let timerInterval
        if(timeStarted) {
            timerInterval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        setTimeFinished(true)
                        clearInterval(timerInterval)
                        return 0
                    }
                    return prevTime - 1
                })
            }, 1000)
        }
        return () => clearInterval(timerInterval)
    },[timeStarted])
    



  return (
    <>
    <div id="components-timer-time">{time}</div>
    {/* <button onClick={handleClick}>Restart</button> */}
    </>
  )
}

export default Timer