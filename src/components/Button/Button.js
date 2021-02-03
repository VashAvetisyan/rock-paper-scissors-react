import React from 'react'

import './Button.scss'

function Button({children ,className, dataIndex, onClick}){
    return (
        <div className={`app-button ${className}`} data-index={dataIndex} onClick={onClick} >
            {children}
        </div>
    )
}

export default Button