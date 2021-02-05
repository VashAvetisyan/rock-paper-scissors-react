import React from 'react'

import './ScoreBar.scss'

function ScoreBar( {currentScore} ){
    return (
        <div className="app-scorebar">
            <h1 className="app-scorebar__text">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <div className="app-scorebar__scorebox">
                <div className="app-scorebar__scorebox__title">
                    Score
                </div>
                <div className="app-scorebar__scorebox__score">
                    {currentScore}
                </div>
            </div>
        </div>
    )
}

export default ScoreBar