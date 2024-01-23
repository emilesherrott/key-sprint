import React, { useState } from "react";
import axios from "axios";

import { SoloGamePage } from "../../pages"

import "./SoloPage.css"

const SoloPage = () => {

  const [words, setWords] = useState([])

  const handleClick = async (level) => {
    const { data } = await axios.get(`http://localhost:3000/solo/${level}`)
    if (data.success) {
      const mappedData = data.words.map(word => word.word)
      setWords(mappedData)
    }
  }


  return (
    <>
    <div id="pages-solopage-buttons">
      <button className="pages-solopage-button" onClick={() => handleClick("easy")}>Easy</button>
      <button className="pages-solopage-button" onClick={() => handleClick("average")}>Average</button>
      <button className="pages-solopage-button" onClick={() => handleClick("difficult")}>Difficult</button>
    </div>
    { words.length ? 
    <section id="pages-solopage-game-display">
      <SoloGamePage words={words}/>
    </section>
    :
    ""
    }
    </>
  
    )
};

export default SoloPage;
