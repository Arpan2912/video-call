import React, { Component } from 'react';
import FriendSidebar from '../../components/firendRoom/sidebar'
import FriendHeaderCard from '../../components/firendRoom/topcard'
import MessageChat from '../../components/build/ui-mchat'
import VideoChat from '../../components/build/video-call'
import friendData from '../../data/friendData.json'
import FriendsGame from '../../components/firendRoom/friendsGame'
import $ from "jquery"

export class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            fr_data:friendData,
            precontentState:true,
            messageState: false,
            friendsGameState:false,
            videoCallState:false, 
            f_key: 0,          
            f_name:''
        };
        this.handleLinkActive = this.handleLinkActive.bind(this);    
        this.cha= this.cha.bind(this);    
        this.parentCallback=this.parentCallback.bind(this);
    } 

    componentDidMount(){
        this.props.handleLinkActive('friendState');
        console.log(this.props.location.state); 
        if(this.props.location.state){
            $('.size-reduce-btn').trigger('click'); 
            this.setState({precontentState:false})
            this.setState({friendsGameState:true})
        }

    }

    handleLinkActive(txt){        
        // console.log(txt);
        this.setState({
            messageState:false,
        });
        this.setState({[txt]: true});
    }

    cha(comes_key){  
        // console.log(comes_key);      
        if(comes_key >= 0){    
            this.setState({precontentState:false});
            this.setState({messageState:true}, ()=> {
                this.setState({f_name:this.state.fr_data[comes_key]["name"]}) 
                this.setState({f_key:comes_key})
            });
            this.setState({videoCallState:false});
        }    
                      
    }

    parentCallback = (come_txt) => {  
        if(come_txt === "vc"){
            this.setState({messageState:false});
            this.setState({videoCallState:true});
        }        
    }

    getEndState = (come_end) => {
        if(come_end !==""){
            this.setState({precontentState:false});
            this.setState({messageState:true});
            this.setState({videoCallState:false});
        }
    }

    
    render() {
        const{
            precontentState,
            messageState,
            videoCallState,
            friendsGameState,
          } = this.state;
        return (
            <div className="frind-content"  style={{display:'flex'}}>
                <FriendSidebar cha={this.cha}/>
                <div className="friendcontainer">
                    <FriendHeaderCard fName = {this.state.f_name}  parentCallback = {this.parentCallback}/>
                    <div className="fr-main" id="frMain">
                        <div className="fr-main-container pos-re">
                            <div>   
                                {precontentState && 
                                    <div className="fr-precontent">
                                        <div className="fr-welcome-container">
                                            <div className='fr-welcome-img-wrapper'>
                                                <img src={'../../assets/popula/welcome.png'} alt="fr-welcome"></img>
                                            </div>
                                            <h3 className="mt-3" style={{color:"#ff8300"}}>GET CONNECTED WITH YOUR FRIENDS</h3>
                                            <h3 style={{color:"#ff8300"}}> & LOVE ONES</h3>
                                        </div>
                                    </div>
                                }            
                                {messageState && <MessageChat/>}  
                                {videoCallState && <VideoChat fr_videoCall={this.state.f_key} pCall={this.getEndState}/>}
                                {friendsGameState && <FriendsGame history={this.props.history} teamData={this.props.location.state} />}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>            
        )
    }
}

export default index
