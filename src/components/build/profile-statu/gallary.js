import React, { Component } from 'react'
import userData from '../../../data/userData.json';


class profileGallary extends Component {
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
                <span>Photos & Videos</span>
            </div>
            <div className='profile-item-content justify-align-center'> 

                <div className="justifyBeetween" style={{width:"100%"}}>
                    <h6 style={{color:"#9CA1C4", fontWeight:"100"}}>Albums</h6>
                </div>
                <div className="justifyBeetween flexWrap" style={{width:"100%"}}>
                { 
                  this.state.profileData[this.props.id]['gallery'].map((gallery,j)=>{
                  return (
                    <div className="album-card" key={j}>
                        <div className="al-card-title">
                            <h5>{gallery["title"]}</h5>
                        </div>
                        <div className="al-card-media">
                            <img src={gallery["profile"]} alt="album-face"></img>
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

export default profileGallary
