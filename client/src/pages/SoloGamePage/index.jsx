import React, { useState, useEffect } from "react";
import axios from "axios";

import { Timer, SoloEndGameResults } from "../../components";

import "./SoloGamePage.css";

const SoloGamePage = ({ words, gameWords, setGameWords, scoreWords, setScoreWords, misspeltWords, setMisspeltWords, time, setTime, timeStarted, setTimeStarted, timeFinished, setTimeFinished }) => {

  const [remainingWords, setRemainingWords] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setGameWords(words.slice(0,5))
    setRemainingWords(words.slice(5))
  }, [words])

  const handleChange = (event) => {
    setTimeStarted(true);
    const value = event.target.value;
    setInput(value);
    if (value[value.length - 1] === " ") setInput("");
  };

  const handleKeyDown = (event) => {
    if (time > 0) {
      if (event.key === " ") { 
        let submission = event.target.value;
        if (submission === gameWords[0]) {
          setScoreWords((prevState) => prevState + 1);
        } else {
          setMisspeltWords((prevState) => prevState + 1);
        }
        setGameWords((prevWords) => {
          const updatedWords = [...prevWords.slice(1)];
          if (remainingWords.length > 0) {
            updatedWords.push(remainingWords[0]);
            setRemainingWords((prevRemaining) => [...prevRemaining.slice(1)]);
          }
          return updatedWords;
        });
      }
    }
    setInput(event.target.value);
  };

  return (
    <>
      {!timeFinished ? (
        <>
          <Timer time={time} setTime={setTime} timeStarted={timeStarted} setTimeFinished={setTimeFinished} />
          <section id="pages-sologame-page-game">
            <input type="text" id="pages-sologame-page-input" value={input} placeholder={gameWords[0]} onChange={handleChange} onKeyDown={handleKeyDown} />
            <ol id="pages-sologame-page-word-ol">
              {gameWords.map((word, i) => {
                return (
                  <li className="pages-sologame-page-word-li" key={i}>
                    {word}
                  </li>
                );
              })}
            </ol>
          </section>
        </>
      ) : (
        <SoloEndGameResults scoreWords={scoreWords} misspeltWords={misspeltWords} />
      )}
    </>
  );
};

export default SoloGamePage;
