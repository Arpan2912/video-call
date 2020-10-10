import React, { Component } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DoneIcon from '@material-ui/icons/Done';
import ShareMedia from '../ui-share'
import $ from "jquery"

export class mchat extends Component {
    constructor(props){
        super(props);
        this.state={
          share:false,
          videoshare:false,
          videoUrl:'',
          gameshare:false,
          gameUrl:'',

        };

        this.handelerChangeState = this.handelerChangeState.bind(this);
        this.chnageState = this.chnageState.bind(this);
        this.getMedia = this.getMedia.bind(this);
    }

    handelerChangeState(){        
        this.setState({share:!this.state.share});
    }

    chnageState(txt){
        // console.log(txt);
        if(txt==='checked'){
            this.setState({share:false})
        }
    }

    getMedia = (mediaUrl) => {
        console.log( $(".chats").scrollTop());
        if(mediaUrl.source === "video"){
            this.setState({videoshare:true})
            this.setState({videoUrl:mediaUrl.url})            
        }else if(mediaUrl.source === "game"){
            this.setState({gameshare:true})
            this.setState({gameUrl:mediaUrl.url})
        }
    }

    render() {
        const{
            share,
            gameshare,
            videoshare,            
        } = this.state;
        return (
            <div className="frc mt-4" style={{marginLeft:"40px"}} >
                <div className="chatbot-content pos-re">
                    <div className="chats">
                        <div className="chat-line">
                            <span className="u1 chat pos-re"> 
                                Hey , how are you doing. today was<br></br> your birthday back with the money.                      
                                <div className="send-time">3:52</div>                     
                            </span>
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                            
                        </div>
                        

                        <div className="chat-line own-chat mt-0"> 
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                            <span className="u2 chat">Hello good morning, <br></br>am I late to the feast? 
                                <div className="send-time">3:52</div> 
                                <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                            </span>
                        </div>
                        

                        <div className="chat-line own-chat mt-0"> 
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                            <span className="u2 chat">Hello good morning <br></br> &#x1F618; &#x1F62A;
                                <div className="send-time">3:52</div> 
                                <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                            </span>
                        </div>
                        

                        <div className="chat-line">                            
                            <span className="u1 chat pos-re">
                                Hey , how are you doing. today was your birthday back with the money.<br></br> &#x1F618; &#x1F62A;                      
                                <div className="send-time">3:52</div> 
                            </span>
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                        </div>
                       

                        <div className="chat-line own-chat mt-0"> 
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                            <span className="u2 chat">Hello good morning, am I late to the feast?<br></br> &#x1F618; &#x1F62A;
                                <div className="send-time">3:52</div> 
                                <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                            </span>
                        </div> 

                        <div className="chat-line">                            
                            <span className="u1 chat pos-re">
                                Hey , how are you doing.                      
                                <div className="send-time">3:52</div> 
                            </span>
                            <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>
                        </div> 


                        {gameshare && 
                            <div className="chat-line own-chat mt-0"> 
                                <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                                <span className="u2 chat" style={{width:"545px",padding: "18px"}}>
                                    <img src={this.state.gameUrl} alt="game" width={"100%"} />
                                    <div className="send-time">3:52</div> 
                                    <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                                </span>
                            </div> 
                        }

                        {videoshare && 
                            <div className="chat-line own-chat mt-0"> 
                                <span style={{display:"flex", alignItems:"center"}}><MoreHorizIcon></MoreHorizIcon></span>                   
                                <span className="u2 chat" style={{width:"545px",padding: "18px"}}>
                                    <iframe title="dflsf" width="100%" height="288px" src={this.state.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="send-time">3:52</div> 
                                    <div className="mr-3 own-check"><DoneIcon/><DoneIcon/></div> 
                                </span>
                            </div> 
                        } 

                    </div>

                    <div className="pos-re">  
                        {share && <ShareMedia aa={this.chnageState} getUrl={this.getMedia}/>}
                    </div>


                    <div className="chatbot-footer fr-chat-footer pos-ab" style={{bottom:"0"}}>
                        <div className="share-btn content-footer-btn"  onClick={()=>this.handelerChangeState()}  style={{color:`${this.state.share?"#ff8300":"#4e5165"}`}}>
                            <div className="share-icon" style={{background:`${this.state.share?"#ff8300":"#4e5165"}`}}></div>
                            Share
                        </div> 
                        <textarea id="message" placeholder="Send a message..." required="" minLength="1" className="fr-chat-text" maxLength="1500"/>
                        <img src={'../../assets/icons/messageSend.svg'} alt="phiz icon"></img>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default mchat
