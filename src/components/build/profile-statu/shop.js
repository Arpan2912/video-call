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
                <span>Items Sold in Marketplace</span>
            </div>
            <div className='profile-item-content justify-align-center'>
                <div className="justifyBeetween flexWrap" style={{width:"100%"}}>
                { 
                  this.state.profileData[this.props.id]['shop'].map((shop,tr)=>{

                            let menuItems = [];

                            for (var i = 0; i <shop["productStar"]; i++) {
                                menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                            }
    
                            for (var k = 0; k <5-shop["productStar"]; k++) {
                                menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                            }                          
                      return (

                          <div className="shop-card" key={tr}>
                              <div className="sh-card-back">
                                  <img src={shop["productBack"]} alt="product-face" style={{width:'100%', height:"100%"}}></img>
                              </div>
                              <div className="sh-card-body">
                                  <p>{shop['productName']}</p> 
                                  <span>$<span>{shop['productCost']}</span>&nbsp;USD</span>   
                                  <div className="review-star-wrapper">
                                      {menuItems}
                                      <span><span>{shop['productReview']}</span> Reviews</span>
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
