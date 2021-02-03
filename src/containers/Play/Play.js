import Button from 'components/Button/Button'
import React, { Component }  from 'react'
import data from 'game-data/data';
import Pointer from 'components/Pointer/Pointer';

import resault from 'validate/resalt';
import './Play.scss'
import Game from 'validate/game';

let gameObj = {
    intarval:3,
    PlayButtonRandomClass:null,
    PlayButtonRandomName:null
}

class Play extends Component{
    state = {
        currentScore:0,
        ...gameObj
    }

    
    restart = () => {
        
    }
    
    componentDidMount() {
        this.intarvalId = setInterval(() => {
            this.setState({ intarval: this.state.intarval - 1 });
        }, 800);

    }
    
    componentDidUpdate() {
        if(this.state.intarval <= 0){
            clearInterval(this.intarvalId)

            function randomNumber(){
                return Math.floor(Math.random() * 4) + 1
            }

            for(let i = 0; i < data.length; i++){
                if(randomNumber() === data[i].dataIndex ){
                    this.setState({
                        PlayButtonRandomClass:data[i].className,
                        PlayButtonRandomName:data[i].name
                    })
                }
            }
        }
    }
    
    

    render(){
        return (
            <div>
                <Pointer currentScore={resault(Game(this.props.ButtonClassName, this.state.PlayButtonRandomClass))}/>

            <div className="app-play">
                <div className="app-play__pack">
                    <div className="app-play__pack__title">
                        {`YOU PICKED ${this.props.PlayButtonName}`}
                    </div>
                    <Button className={`${this.props.ButtonClassName} app-play__pack__button`}/>
                </div>
                <div className="app-play__result">
                    <h3>
                        {
                          Game(this.props.ButtonClassName, this.state.PlayButtonRandomClass)
                        }
                    </h3>
                    <div className="play-again__button restart" href="#" onClick={() => this.setState({ ...gameObj })} href="/">Play Again</div>
                </div>
                <div className="app-play__pack">
                    <div className="app-play__pack__title">
                        {`YOU PICKED ${this.state.PlayButtonRandomName}`}
                    </div>
                    <Button className={`${this.state.PlayButtonRandomClass} app-play__pack__button`}>
                        { this.state.intarval > 0 ? this.state.intarval : null}
                    </Button>
                </div>
            </div>
            </div>
        )
    }
}

export default Play