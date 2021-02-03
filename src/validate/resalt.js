let score = 0

const resault = (val) => {
    if(val === "YOU WIN"){
        score++
    }else if(val === "YOU LOSE"){
        score--
    }
    return score
}

export default resault