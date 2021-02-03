
const Game = (select, random) => {
      if(select === "app-button__peper" && random === "app-button__scissors"){
        return "YOU LOSE"
    }
    if(select === "app-button__scissors" && random === "app-button__stone"){
        return "YOU LOSE"
    }
    if(select === "app-button__stone" && random === "app-button__peper"){
        return "YOU LOSE"
    }

    if(select === random){
        return "Draw"
    }


    if(select === "app-button__peper" && random === "app-button__stone"){
        return "YOU WIN"
    }
    if(select === "app-button__scissors" && random === "app-button__peper"){
        return "YOU WIN"
    }
    if(select === "app-button__stone" && random === "app-button__scissors"){
        return "YOU WIN"
    }
}

export default Game