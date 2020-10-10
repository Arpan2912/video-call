import React, { Component } from 'react'
import gameData from '../../../../data/gameData.json';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';

export class gameitem extends Component {
    constructor(props){
        super(props);
        this.state={
          gamelist:gameData.games,
        }

        this.gameHander = this.gameHander.bind(this);
    }

    gameHander(gId){
        if(gId===0){
            this.props.pregameA("callofduty"); //send data to game-home 
        }
    }
    
    render() {
        return (
            <>
            {
                this.state.gamelist.map((game,ij)=>{
                    return(
                        <div className="g-item-wrapper" key={ij}>
                            <div className="g-item-header pos-re">
                                <h4>{game.listTitle}</h4>
                                <div className="col-12 p-0 pos-ab" style={{bottom:"53%"}}>
                                    <div className="middle-line"></div>
                                </div>
                            </div>
                            <div className="g-card-wrapper">                                
                                {
                                    game.gamesList.map((g_list,j)=>{
                                        let menuItems = [];

                                        for (var i = 0; i <g_list["gameStar"]; i++) {
                                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                                        }

                                        for (var k = 0; k <5-g_list["gameStar"]; k++) {
                                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                                        }
                                        return(
                                            <div className="game-card" key={j} onClick={()=>this.gameHander(j)}>
                                                <div className="ga-card-back">
                                                    <img src={g_list.gameBack} alt="frind-face" style={{width:'100%', height:"100%"}}></img>
                                                </div>
                                                <div className="ga-card-body">
                                                    <p>{g_list.gameName}</p> 
                                                    <span>{g_list.gameDescription}</span>   
                                                    <div className="review-star-wrapper"> 
                                                        {menuItems}
                                                    </div>                        
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> 
                            <div className= {(game.backImg)?"gameback-wrapper pos-re":'load-more-wrapper pos-re'}>
                                <img src={game.backImg} alt=""></img>  
                                <div className="playbutton-wrapper">
                                    <Button className="g-back">{(game.backImg)?"Play Now":"Load More"}</Button>
                                </div>                                      
                            </div>
                        </div>
                    )

                })
            }
            </>
        )
    }
}

export default gameitem
