import React from 'react'

import ScoreBar from 'components/ScoreBar/ScoreBar'
import Button from 'components/Button/Button'

import PaperIcon from 'Icons/PaperIcon'
import ScissorsIcon from 'Icons/ScissorsIcon'
import RockIcon from 'Icons/RockIcon'

import './Game.scss'
import getGameResult from 'utils/getGameResult'

const choice = {
    paper: 'paper',
    scissers: 'scissers',
    rock: 'rock'
}

const buttonMap = {
    paper: {
        icon:PaperIcon,
        color: '#5671F5',
        boxShadow:'0px 8px #0e34f1',
        position:'translateX(0px)'
    },
    scissers: {
        icon: ScissorsIcon,
        color: '#ECA922',
        boxShadow:'0px 8px #b27c10',
        position:'translateX(250px)'
    },
    rock:{
        icon: RockIcon,
        color:'#DD405D',
        boxShadow:'0px 8px #b21f3a',
        position:'translateX(125px) translateY(230px)'
    }
}

const initiaState = {
    userSelection: null,
    randomSelection: null,
    isTimeOn : false,
    winnerText: '',
    timer:3
}

class Game extends React.Component{
    state = {
        ...initiaState,
        currentScore: 0,
    }

    restart = () => {
        this.setState({
            ...initiaState,
            currentScore: this.state.currentScore
        })
    }

    randomChoice = () => {
        const randomIndex = Math.floor(Math.random() * 3)
        const randomChoice = Object.keys(choice)[randomIndex]
        return randomChoice;
    }

    play = (selection) => {
        this.setState({
            userSelection: selection,
            isTimeOn:true
        })
        const randomChoice = this.randomChoice()
        const winnerText = getGameResult(selection, randomChoice)
        
        this.setState({
            randomSelection: randomChoice,
            winnerText,
        })
    }

    componentDidUpdate() {
        if(this.state.timer === 3 &&  this.state.userSelection) {
            this.intervalId = setInterval(() => {
                if(this.state.timer === 1){
                    let score = this.state.currentScore;
                    if(this.state.winnerText === "You Win"){
                        score++

                    }else if(this.state.winnerText === "You lose"){
                        score--
                    }
                    clearInterval(this.intervalId)
                    this.setState({
                        isTimeOn:false,
                        currentScore:score
                    })
                }
                this.setState({
                    timer: this.state.timer - 1
                })
            }, 1000)
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render(){
        const { currentScore, userSelection, randomSelection, isTimeOn, timer, winnerText } = this.state
        return (
            <div className="app-game">
                <ScoreBar currentScore={currentScore} />
            {!userSelection ? (
                <div className="app-game__button-main">
                    <Button 
                        Icon={buttonMap[choice.paper].icon}
                        color={buttonMap[choice.paper].color}
                        boxShadow={buttonMap[choice.paper].boxShadow}
                        onClick={() => {this.play(choice.paper)}}
                        transform={buttonMap[choice.paper].position}
                        className=""
                    />
                    <Button 
                        Icon={buttonMap[choice.scissers].icon}
                        color={buttonMap[choice.scissers].color}
                        boxShadow={buttonMap[choice.scissers].boxShadow}
                        onClick={() => {this.play(choice.scissers)}}
                        transform={buttonMap[choice.scissers].position}
                        className=""
                    />
                    <Button 
                        Icon={buttonMap[choice.rock].icon}
                        color={buttonMap[choice.rock].color}
                        boxShadow={buttonMap[choice.rock].boxShadow}
                        onClick={() => {this.play(choice.rock)}}
                        className=""
                        transform={buttonMap[choice.rock].position}
                    />
                </div>
            ) : (
                    <div className="app-game__selection-main">
                        <Button 
                            Icon={buttonMap[userSelection].icon}
                            color={buttonMap[userSelection].color}
                            boxShadow={buttonMap[userSelection].boxShadow}
                            className="play-selection"
                            onClick={() => { }}
                        /> 
                        {isTimeOn ? (
                            <div className="app-game__selection-main__timer">
                                {timer}
                            </div>
                        ) : (
                            <>
                                <div className="app-game__selection-main__result">
                                    <h3>{winnerText}</h3>
                                    <button onClick={this.restart} className="app-game__selection-main__result__restart-btn">
                                        restart
                                    </button>
                                </div>
                                <div>
                                    <Button 
                                        Icon={buttonMap[randomSelection].icon}
                                        color={buttonMap[randomSelection].color}
                                        boxShadow={buttonMap[randomSelection].boxShadow}
                                        className="random-selection"
                                        onClick={() => { }}
                                    /> 
                                </div>
                            </>
                        )}
                    </div>
                )
            }
            </div>
        )
    }
}

export default Game