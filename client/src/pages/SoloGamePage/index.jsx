import React, { useState } from "react";
import axios from "axios";

import "./SoloGamePage.css"

const SoloGamePage = ({ words }) => {

    const [gameWords, setGameWords] = useState(words)
    const [input, setInput] = useState("")
    const [scoreWords, setScoreWords] = useState(0)
    const [misspeltWords, setMisspeltWords] = useState(0)


    const handleChange = (event) => {
        const value = event.target.value
        setInput(value)
        if(value[value.length-1] === " ")
        setInput("")
    }

    const handleKeyDown = (event) => {
        if(event.key === " ") {
            let submission = event.target.value
            if(submission === gameWords[0]) {
                setScoreWords(prevState => prevState+1)
            } else {
                setMisspeltWords(prevState => prevState+1)
            }
            let updatedGameWords = gameWords.slice(1)
            setGameWords(updatedGameWords)
        }
        console.log("scoreWords", scoreWords)
        console.log("misspelt", misspeltWords)

        const value = event.key
        setInput(event.target.value)


    }

  return (
    <>
    <section id="pages-sologame-page-game">
        <input type="text" id="pages-sologame-page-input" value={input} placeholder={gameWords[0]} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <ol id="pages-sologame-page-word-ol">
            {
                gameWords.map((word, i) => {
                  return <li className="pages-sologame-page-word-li" key={i}>{word}</li>
                })
            }
        </ol>
    </section>
    </>
  )
};

export default SoloGamePage;
