import React, { Component } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ProfileStatu from '../profile-statu';
import ProfileRoom from '../profile-statu/room';
import ProfileFriend from '../profile-statu/friend.js';
import PfofileGallary from '../profile-statu/gallary.js';
import PfofileGame from '../profile-statu/game.js';
import PfofileShop from '../profile-statu/shop.js';
import PfofileGift from '../profile-statu/gift.js';
import userData from '../../../data/userData.json';

import $ from "jquery";


class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {
            giftState:false,
            messageState:false,
            statuState: true,
            roomState: false,
            friendState: false,
            gallryState:false,           
            gameState: false,
            shopState: false,
            profileData:userData,
        };
        this.handleLinkActive = this.handleLinkActive.bind(this);
        this.handerModal=this.handerModal.bind(this);       
    }   

    handleLinkActive(txt){
        console.log(txt);
        this.setState({
            giftState:false,
            messageState:false,
            statuState: false, 
            roomState: false, 
            friendState: false, 
            gallryState:false,
            appState: false, 
            gameState: false,
            shopState: false,
        });
        this.setState({[txt]: true});
    }

    handerModal(){
        if(this.state.giftState){
            this.setState({statuState:true});
            this.setState({giftState:false});
        }else if(this.state.messageState){
            this.setState({statuState:true});
            this.setState({messageState:false});
        }else{
            $("#modal-user-profile").slideToggle();
            $(".full-background").css("display","none");
        }
    }

  render() {  
      const{
        giftState,
        messageState,
        statuState,
        roomState,
        friendState,
        gallryState,           
        gameState,
        shopState,
      } = this.state;
    

    return (
      <>        
        <div className="modal-content share-modal">
            <div className="modal-header pos-re">
                <div className="pos-ab g-back bunHover modal-back-p" onClick={this.handerModal}>
                    <span className="small-back-icon"><ArrowBackIosIcon/></span>
                </div>                
                <h3>User Profile</h3>
            </div>            
            <div className="modal-body mt-0" style={{textAlign:"center", padding:'40px'}}>
                <div className="profile-background">
                    <img src={this.state.profileData[this.props.userId]['background']} style={{width:'100%', height:'auto'}} alt=''></img>
                </div>
                <div className={(messageState)?"profile-summary ma-profile-summary":"profile-summary"}>
                    <div className={(messageState)?"ma-facewarraper":"profile-face-warraper "}>
                        <span className={(messageState)?'ma-to':"message-actived"}>To: </span>
                        <img src={this.state.profileData[this.props.userId]['profile']} alt='userprofileFace'></img>
                        <Button className={(messageState)?'message-actived':"g-back bunHover round-btn"} onClick={()=>this.handleLinkActive('messageState')}>Message</Button>
                    </div>
                    <div className="profile-summary-content">
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div className={(messageState)?'ma-namedata':'user-name-data'}>
                                <h3 className={(messageState)?"":"mt-3"}>{this.state.profileData[this.props.userId]['username']}</h3> 

                                <div style={{display:`${this.state.profileData[this.props.userId]['gold']?"flex":"none"}`}}>
                                    <div className='gold-icon mr-2'>G</div>
                                    <h6  style={{color:'#ff8300'}}>Gold Member</h6>
                                </div>
                            </div>
                            <div className={(messageState)? "message-actived": "mt-3"}>
                                <Button className="g-back bunHover round-btn">Add Friend</Button>
                                <Button className="g-back bunHover round-btn"  onClick={()=>this.handleLinkActive('giftState')}>Send Gift</Button>
                            </div>
                        </div>
                        <div className={(messageState)?"message-actived":"profile-description mt-5"}>
                            <h6 className="mb-0">{this.state.profileData[this.props.userId]['description1']}:</h6>
                            <p style={{color:'white'}}>{this.state.profileData[this.props.userId]['description2']}</p>
                        </div>                                                
                    </div>                                       
                </div>
                <div className={(messageState)?"message-inputPad":"message-actived"}>
                    <textarea cols="10" rows="5" charswidth="23" name="text_body" placeholder="Wazzup bro? glad to be part on your room. thanks for accepting"></textarea>
                    <div className="send-message-wrapper">
                        <img src="../../assets/icons/small-plus.svg" alt="phiz icon"></img>
                        <Button className="g-back bunHover">Send</Button>
                    </div>
                </div> 
                <div className="giftSlider">
                    {giftState && (<PfofileGift/>)}

                    {giftState && (
                        <div className="justifyBeetween pb-0" style={{padding:"20px"}}>
                            <Button className="un-bunHover">More Gifts</Button>
                            <Button className="g-back bunHover">Send</Button>
                        </div>
                    )}
                </div>
                
                <div className={(messageState||giftState)?"message-actived":"user-room-status"}>
                    
                    <div className='room-status-header mb-5'>
                        <Button className={(statuState)? "actived-link": ""} onClick={()=>this.handleLinkActive('statuState')}>Status</Button>
                        <Button className={(roomState)? "actived-link": ""} onClick={()=>this.handleLinkActive('roomState')}>Room</Button>
                        <Button className={(friendState)? "actived-link": ""} onClick={()=>this.handleLinkActive('friendState')}>Friends</Button>
                        <Button className={(gallryState)? "actived-link": ""} onClick={()=>this.handleLinkActive('gallryState')}>Gallery</Button>
                        <Button className={(gameState)? "actived-link": ""} onClick={()=>this.handleLinkActive('gameState')}>Games</Button>
                        <Button className={(shopState)? "actived-link": ""} onClick={()=>this.handleLinkActive('shopState')}>Shop</Button>
                    </div>
                    
                    <div>
                        {statuState && (<ProfileStatu id={this.props.userId}/>)}                        
                        {roomState && (<ProfileRoom id={this.props.userId}/>)}                        
                        {friendState && (<ProfileFriend id={this.props.userId}/>)}                        
                        {gallryState && (<PfofileGallary id={this.props.userId}/>)}                        
                        {gameState && (<PfofileGame id={this.props.userId}/>)}                        
                        {shopState && (<PfofileShop id={this.props.userId}/>)}  
                    </div>
                </div>
                   
            </div>
        </div>
      </>
    )
  }
}

export default componentName
