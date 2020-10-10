import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import favoriteData from '../../data/shopData.json';
import CloseIcon from '@material-ui/icons/Close';


export class index extends Component {
    constructor(props){
        super(props);
        this.state={
            favorites:favoriteData.favorityProducts,
        }    
      }
    
    render() {
        return (
            
            <div className="favorite-product-content top-game-content">
                { 
                    this.state.favorites.map((favorite,j)=>{
                        let menuItems = [];

                        for (var i = 0; i <favorite["star"]; i++) {
                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                        }

                        for (var k = 0; k <5-favorite["star"]; k++) {
                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                        }
                        return (
                            <div style={{display:"flex",marginBottom:"30px", alignItems:"center"}} key={j}>
                                <div className="top-game-card pos-re">
                                    <div className="t-g-card-left-section">
                                        <div className="t-g-card-img-wrapper">
                                            <img src={favorite.backImg} alt="" />
                                        </div>
                                        <div className="t-g-data">
                                            <h1>{favorite.name}</h1>
                                            <h5>$ {favorite.cost}&nbsp;USD</h5> 
                                            <p className="mb-0">posted by: Davey Jones</p>                                           
                                            <div className="t-g-review-wrapper">                                                
                                                {menuItems }
                                                <span>{favorite.review} Reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="t-g-card-right-section">
                                        <div className="g-button-wrraper favority-buy-btns">
                                            <Button className="g-card-share-btn">MESSAGE SELLER</Button>
                                            <Button className="g-card-play-btn g-back bunHover">BUY ITEM</Button>
                                        </div>
                                    </div>
                                    <button className="size-reduce-btn favorite-close-btn">
                                            <CloseIcon className="arrow-back-icon"/>
                                    </button>
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
