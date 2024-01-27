import React, { useState, useEffect } from 'react'

import "./HomeFactAnimation.css"

const HomeFactAnimation = () => {
  const [text, setText] = useState("")
  const phrase = "223 WPM, the pace of 2023 Worlds Fastest Typer Winner, Joshu"
  useEffect(() => {
        let index = 0
        const intervalId = setInterval(() => {
            setText(prevText => {
                const newText = prevText + phrase[index]
                index += 1
                
                if(index === phrase.length){
                    clearInterval(intervalId)
                  }
                  
                  return newText
              })
          }, 37)
          
          
          return () => clearInterval(intervalId)
  }, []);

  return (
    <div id="components-homefactanimation-h2-container">
      <h2 id="components-homefactanimation-h2">{text}</h2>
    </div>
  );
};
export default HomeFactAnimation