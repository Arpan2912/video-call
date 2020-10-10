import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import gameData from '../../../../data/gameData.json';



export class index extends Component {
    constructor(props){
        super(props);
        this.state={
            t_game:gameData.topgame,
        }
      }

    render() {
        return (
            <div className="top-game-content">
                { 
                    this.state.t_game.map((t_game,j)=>{
                        let menuItems = [];

                        for (var i = 0; i <t_game["gameStar"]; i++) {
                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                        }

                        for (var k = 0; k <5-t_game["gameStar"]; k++) {
                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                        }
                        return (
                            <div style={{display:"flex",marginBottom:"20px", alignItems:"center"}} key={j}>
                                <h3 className="top-game-ranking">{j+1}</h3>
                                <div className="top-game-card">
                                    <div className="t-g-card-left-section">
                                        <div className="t-g-card-img-wrapper">
                                            <img src={t_game.backurl} alt="" />
                                        </div>
                                        <div className="t-g-data">
                                            <h1>{t_game.gamename}</h1>
                                            <p>{t_game.stautus}</p>
                                            <div className="t-g-review-wrapper">
                                                {menuItems }
                                                <span>{t_game.review} Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="t-g-card-right-section">
                                        <div className="g-button-wrraper">
                                            <Button className="g-card-share-btn">share</Button>
                                            <Button className="g-card-play-btn g-back bunHover">play</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default index
