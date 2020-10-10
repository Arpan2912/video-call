import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import userData from '../../../data/userData.json';





class profileFriend extends Component {
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
                <span>{this.state.profileData[this.props.id]['username']}</span>
                <span>'s Friends</span>
            </div>
            <div className='profile-item-content justify-align-center'>
                <div className="search-box" style={{background:'#3C3E4B'}}>
                    <div className="searchIcon">
                    <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}                        
                    />
                </div>
                <div className="justifyBeetween" style={{width:"100%"}}>
                    <h6 style={{color:"#9CA1C4", fontWeight:"100"}}>Friends(<span>{this.state.profileData[this.props.id]['friendsCount']}</span>)</h6>
                </div>
                <div className="justifyBeetween flexWrap" style={{width:"100%"}}>
                { 
                    this.state.profileData[this.props.id]['friends'].map((friends,j)=>{
                    return (
                                <div className="friend-card" key={j}>
                                    <div className="fr-card-back">
                                        <img src={friends["profile"]} alt="frind-face"></img>
                                    </div>
                                    <div className="fr-Face pos-ab">
                                        <img src={friends["profile"]} alt="frind-face" style={{width:'100%'}}></img>                            
                                    </div>
                                    <div className="fr-card-body">
                                        <h6>{friends["username"]}</h6>
                                        <Button className="g-back bunHover mt-2">profile</Button>
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

export default profileFriend
