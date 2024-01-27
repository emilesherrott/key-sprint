import React from 'react'

import "./SoloEndGameResults.css"

const SoloEndGameResults = ({ scoreWords, misspeltWords }) => {

    const percentage = Math.round(100 - ((misspeltWords / scoreWords))*100)

  return (
    <section id="components-soloendgame-results-section">
        <p>You scored {scoreWords} WPM with {percentage}% accuracy.</p>
    </section>
  )
}

export default SoloEndGameResults