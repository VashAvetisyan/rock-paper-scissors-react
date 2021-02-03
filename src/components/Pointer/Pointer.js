import React from 'react';

import './Pointer.scss';

function Pointer({currentScore}){
    return (
        <div className="app-pointer">
            <h1 className="app-pointer__title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <div className="app-pointer__scorebox">
                <div className="app-pointer__scorebox__title">
                    Score
                </div>
                <div className="app-pointer__scorebox__score">
                    {currentScore}
                </div>
            </div>
        </div>
    )
}

export default Pointer