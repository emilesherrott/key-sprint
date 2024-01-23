import React, { useState, useEffect } from 'react'

import "./HomeBodyAnimation.css"

const HomeBodyAnimation = () => {
    const [text, setText] = useState("")
    const phrase = "The elegance of typing quickly lies in its seamless fusion of speed and precision. A proficient typist transforms the keyboard into a canvas, effortlessly translating thoughts into a symphony of clicks and clacks. The beauty lies not just in the sheer speed, but in the precision and finesse with which thoughts are transcribed into text, transforming the mundane act of typing into a graceful and dynamic art form."
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
      <div id="components-homebodyanimation-h2-container">
        <h2 id="components-homebodyanimation-h2">{text}</h2>
      </div>
    );
  };

export default HomeBodyAnimation