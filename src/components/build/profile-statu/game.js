import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import userData from '../../../data/userData.json';


class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileData:userData
        };
    }
  render() {
    return (
      <>
        <div className="profile-items-style">
            <div className="profile-item-title mb-2">
                <span>Games</span>
            </div>
            <div className='profile-item-content justify-align-center'>                
                <div className="justifyBeetween" style={{width:"100%"}}>
                    <h6 style={{color:"#9CA1C4", fontWeight:"100"}}>Favorite Games</h6>
                </div>
                <div className="justifyBeetween flexWrap" style={{width:"100%"}}>
                { 
                    this.state.profileData[this.props.id]['games'].map((games,ty)=>{

                        let menuItems = [];

                        for (var i = 0; i <games["gameStar"]; i++) {
                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                        }

                        for (var k = 0; k <5-games["gameStar"]; k++) {
                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                        }


                    return (
                        <div className="game-card" key={ty}>
                            <div className="ga-card-back">
                                <img src={games['gameBack']} alt="frind-face" style={{width:'100%', height:"100%"}}></img>
                            </div>
                            <div className="ga-card-body">
                                <p>{games['gameName']}</p> 
                                <span>{games['gameDescription']}</span>   
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
        </div>
      </>
    )
  }
}

export default componentName
