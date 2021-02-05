import React from 'react'

import './Button.scss'

const Button = ({
    Icon,
    color,
    boxShadow,
    transform,
    className,
    onClick
}) => {
    return (
            <div className={`game-button ${className}`} style={{borderColor: color, boxShadow: boxShadow, transform:transform}} onClick={onClick}>
            <div className="game-button__icon-container">
                <Icon />
            </div>
        </div>
    )
}

export default Button