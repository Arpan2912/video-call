import React, { Component } from 'react'
import gameData from '../../../../data/gameData.json';
import StarIcon from '@material-ui/icons/Star';

export class index extends Component {
    constructor(props){
        super(props);
        this.state={
          gamelist:gameData.newlease,
        }
    }
    render() {
        return (
            <div className="new-lease-content-body">
                <div className="newlease-top-back-wrapper pos-re">
                    <img src={'../../assets/gameImg/newlease.webp'} alt=""></img>
                    <div className="inside-text-wrapper pos-ab">
                        <h2>NEW RELEASE GAMES YOU SHOULD</h2>
                        <h1>KEEP AN <span>EYE</span> ON</h1>
                    </div>
                </div>
                <div className="new-lease-content-wrapper">
                    {
                        this.state.gamelist.map((newlease,ij)=>{
                            return(
                                <div className="g-item-wrapper" key={ij}>
                                    <div className="g-item-header pos-re">
                                        <h4>{newlease.listTitle}</h4>
                                        <div className="col-12 p-0 pos-ab" style={{bottom:"53%"}}>
                                            <div className="middle-line"></div>
                                        </div>
                                    </div> 
                                    <div className="g-card-wrapper">                                
                                        {
                                            newlease.gamesList.map((g_list,j)=>{
                                                let menuItems = [];

                                                for (var i = 0; i <g_list["gameStar"]; i++) {
                                                    menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                                                }

                                                for (var k = 0; k <5-g_list["gameStar"]; k++) {
                                                    menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                                                }
                                                return(
                                                    <div className="game-card" key={j}>
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
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        )
    }
}

export default index