import React, {Component} from 'react'

import Home from 'containers/Home/Home'
import Play from 'containers/Play/Play'
import Button from "components/Button/Button";
import data from 'game-data/data';


import './Landing.scss'
let HomeObj = {
    PlayButtonClassName:null,
    PlayButtonName:null,
    selectIndex:null
}

class Landing extends Component{
    state = {
        ...HomeObj,
        page:true,
    }

    ChangePage = (event, dataIndex) => {
        this.setState({
            page:!this.state.page,
            selectIndex:dataIndex
        })

        for(let i = 0; i < data.length; i++){
            if(dataIndex === data[i].dataIndex ){
                this.setState({
                    PlayButtonClassName:data[i].className,
                    PlayButtonName:data[i].name
                })
            }
        }
    }

    render(){
        return (
            <div className="app-landing">
                {this.state.page ? 
                    <Home>
                        {data.map(el => {
                            return <Button key={el.id}
                                    className={`${el.className} app-home-botton`}
                                    dataIndex={el.dataIndex} 
                                    onClick={(e) => { this.ChangePage(e, el.dataIndex) }}/> 
                        })}
                    </Home>
                    :
                    <Play
                    selectIndex={this.state.selectIndex}
                        ButtonClassName={this.state.PlayButtonClassName}
                        PlayButtonName={this.state.PlayButtonName}
                        
                        PlayButtonRandomClass={this.state.PlayButtonRandomClass}>
                        
                    </Play>
                }
            </div>
        )
    }
}

export default Landing