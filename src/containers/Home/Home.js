import React from 'react'

import bgImg from 'assets/home-bg.svg'

import './Home.scss'

function Home({children}){
    return (
        <div className="app-home">
            <img src={bgImg} className="app-home__bg"/>
            {children}
        </div>
    )
}

export default Home