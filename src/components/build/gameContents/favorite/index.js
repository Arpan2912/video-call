import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import gameData from '../../../../data/gameData.json';



export class index extends Component {
    constructor(props){
        super(props);
        this.state={
            favorite:gameData.favorite,
        }    
      }
    
    render() {
        return (
            <div className="top-game-content">
                { 
                    this.state.favorite.map((favorite,j)=>{
                        let menuItems = [];

                        for (var i = 0; i <favorite["gameStar"]; i++) {
                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                        }

                        for (var k = 0; k <5-favorite["gameStar"]; k++) {
                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                        }
                        return (
                            <div style={{display:"flex",marginBottom:"20px", alignItems:"center"}} key={j}>
                                <h3 className="top-game-ranking">{j+1}</h3>
                                <div className="top-game-card">
                                    <div className="t-g-card-left-section">
                                        <div className="t-g-card-img-wrapper">
                                            <img src={favorite.backurl} alt="" />
                                        </div>
                                        <div className="t-g-data">
                                            <h1>{favorite.gamename}</h1>
                                            <p>{favorite.stautus}</p>
                                            <div className="t-g-review-wrapper">
                                                {menuItems }
                                                <span>{favorite.review} Reviews</span>
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
