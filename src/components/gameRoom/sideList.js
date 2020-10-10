import React, { Component } from 'react'
import gameData from '../../data/gameData.json';

class sideList extends Component { 
    constructor(props){
        super(props);
        this.state={
            category:gameData.category,
        }
    }
    
    componentDidMount(){
        // console.log(this.state.category);
    } 


    render() {
        return (
            <div className="g-sidelist-body">
                <div className="g-side-header g-back">
                    <h4>Categories</h4>
                </div>
                <div className="g-side-list">
                    <ul className="g-side-list-wrapper">
                        { 
                            this.state.category.map((category,j)=>{
                            return (
                                <li className="g-side-item" key={j}>{category}</li>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default sideList


// {socialMediaList.map(s => (<li>{s}</li>))}





