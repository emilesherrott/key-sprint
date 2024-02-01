import React, { useState } from "react";
import axios from "axios";

import { SoloGamePage } from "../../pages";

import "./SoloPage.css";

const SoloPage = () => {
  const [words, setWords] = useState([]);
  const [gameWords, setGameWords] = useState([]);
  const [scoreWords, setScoreWords] = useState(0);
  const [misspeltWords, setMisspeltWords] = useState(0);
  const [time, setTime] = useState(60);
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeFinished, setTimeFinished] = useState(false);

  const handleClick = async (level) => {
    setScoreWords(0)
    setMisspeltWords(0)
    setTime(60)
    setTimeStarted(false)
    setTimeFinished(false)
    const { data } = await axios.get(`http://localhost:3000/solo/${level}`);
    if (data.success) {
      let mappedData = data.words.map((word) => word.word);
      for (let i = mappedData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mappedData[i], mappedData[j]] = [mappedData[j], mappedData[i]];
      }
      setWords(mappedData);
    }
  };

  return (
    <>
      <div id="pages-solopage-buttons">
        <button className="pages-solopage-button" onClick={() => handleClick("easy")}>
          Easy
        </button>
        <button className="pages-solopage-button" onClick={() => handleClick("average")}>
          Average
        </button>
        <button className="pages-solopage-button" onClick={() => handleClick("difficult")}>
          Difficult
        </button>
      </div>
      {words.length ? (
        <section id="pages-solopage-game-display">
          <SoloGamePage words={words} gameWords={gameWords} setGameWords={setGameWords} scoreWords={scoreWords} setScoreWords={setScoreWords} misspeltWords={misspeltWords} setMisspeltWords={setMisspeltWords} time={time} setTime={setTime} timeStarted={timeStarted} setTimeStarted={setTimeStarted} timeFinished={timeFinished} setTimeFinished={setTimeFinished} />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default SoloPage;
