import React, { Component } from 'react';
import userData from '../../../data/userData.json';


class ProfilStatu extends Component {

    constructor(props){
        super(props);
        this.state = {
            profileData:userData
        };
    }
  render() {
    return (
      <>

        <div className="statu-body">
        { 
            this.state.profileData[this.props.id]['status'].map((status,j)=>{
            return (
                <div className="statu-room-wrraper" key={j}>
                    <div className='statu-room-name'>
                        <img src={this.state.profileData[this.props.id]['profile']} alt="userName"></img>
                        <span>{this.state.profileData[this.props.id]['username']}</span>
                    </div>                
                    <div className="s-room-content">
                        <div className='s-room-title'>
                            <p className="mb-0">{status["title"]}</p>
                            <p className="">{status["url"]}</p>                        
                        </div>
                        <div className='s-room-img'>
                            <img src={status["backImg"]} alt="roombackImage"></img>
                        </div>
                        <div className='s-room-review'>
                            <div className='review-item'>
                                <img src={'../../assets/icons/review-like.svg'} alt="like"></img>
                                <span className="mr-2 ml-1">{status["review"][0]}</span>likes
                            </div>
                            <div className='review-item'>
                                <img src={'../../assets/icons/review-share.svg'} alt="shares"></img>
                                <span className="mr-2 ml-1">{status["review"][1]}</span>shares
                            </div>
                            <div className='review-item'>
                                <img src={'../../assets/icons/review-message.svg'} alt="comment"></img>
                                <span className="mr-2 ml-1">{status["review"][2]}</span>comments
                            </div>
                        </div>
                    </div>                   
                </div>

            )
        })
    }
        </div>

      </>
    )
  }
}

export default ProfilStatu
