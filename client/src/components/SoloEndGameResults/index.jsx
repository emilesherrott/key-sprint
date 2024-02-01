import React from 'react'

import "./SoloEndGameResults.css"

const SoloEndGameResults = ({ scoreWords, misspeltWords }) => {

  // let percentage = undefined
  // let score = undefined
  // if (scoreWords !== 0){
  //   percentage = Math.round(100 - ((misspeltWords / scoreWords))*100)
  //   score = Math.round((scoreWords * (percentage/100)) - misspeltWords)
  // } else {
  //   percentage = 0
  //   score = 0
  // }


  const totalWords = scoreWords + misspeltWords
  const percentage = Math.round((scoreWords / totalWords) * 100)
  const score = Math.round((scoreWords * (percentage/100)) - misspeltWords)

  return (
    <section id="components-soloendgame-results-section">
        <p>You scored {scoreWords} WPM with {percentage}% accuracy.</p>
        <p>Key Sprint score is: <span id="components-soloendgame-results-score">{score}</span></p>
    </section>
  )
}

export default SoloEndGameResults