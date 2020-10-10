import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { InputGroup,FormControl } from 'react-bootstrap';
import $ from "jquery"




    

export class index extends Component {

    constructor(props){
        super(props);
        this.state={
            flag1:true,
            go_game:false,
            go_video:false,
            game_url:"../../assets/popula/game2.png",
            video_url:"https://www.youtube.com/embed/zCgweqpelFU?start=16"
        }
        this.handleModal=this.handleModal.bind(this); 
        this.changeState = this.changeState.bind(this);
        this.goHandler = this.goHandler.bind(this);
        this.sendUrl = this.sendUrl.bind(this);
        
  
    }

    // componentDidMount(){
    //    console.log(this.props.leftstate);
    // }

    changeState(){
        this.props.aa("checked");        
    }

    sendUrl = () =>{
        if(this.state.go_game){
            let source = "game";
            let obj = {
                source:source,
                url:this.state.game_url
            }
            this.props.getUrl(obj);
            $('.step-modal').fadeToggle();
            
        }else{
            let source = "video"
            let obj = {
                source:source,
                url:this.state.video_url
            }
            this.props.getUrl(obj);
            $('.step-modal').fadeToggle();
        }

    }

    goHandler(name){
        console.log(name);
        this.setState({go_game:false});
        this.setState({go_video:false});
        if(name==='go-game'){
            this.setState({go_game:true});
            $("#modal-game").slideToggle();  
            $("#modal-video-step").slideToggle();
        }else if(name==='go-video-link'){
            this.setState({go_video:true});
            $("#modal-youtubeLink").slideToggle();  
            $("#modal-video-step").slideToggle();
        }else{
            this.setState({go_video:true});
            $("#modal-youtube").slideToggle();  
            $("#modal-video-step").slideToggle();
        }
    }


    
    handleModal(name){    
        if(name==="youtubelink"){
          $("#modal-youtubeLink").slideToggle();      
          $(".share-item-wraper").slideToggle();            
        }
        if(name==="youtube"){
          $("#modal-youtube").slideToggle(); 
          $(".share-item-wraper").slideToggle();
        }
    
        if(name==="game"){
          $("#modal-game").slideToggle(); 
          $(".share-item-wraper").slideToggle();
        }
      }

      

    render() {
        return (
            <>
            <div className="share-item-wraper">
                <h4>Live Sharing </h4>
                <div className="sh-items">
                  <div className="sh-item" onClick={()=>this.handleModal("youtubelink")} >
                    <div className="s-icon s-youtube-link-icon"></div>
                    <div className="s-text">Youtube Link</div>
                  </div>
                  <div className="sh-item" onClick={()=>this.handleModal("youtube")}>
                    <div className="s-icon s-youtube-icon"></div>
                    <div className="s-text">Youtube</div>
                  </div>
                  <div className="sh-item" onClick={()=>this.handleModal("game")}>
                    <div className="s-icon s-gameplay-icon"></div>
                    <div className="s-text">Gameplay</div>
                  </div>
                  <div className="sh-item">
                    <div className="s-icon s-music-icon"></div>
                    <div className="s-text">Music</div>
                  </div>
                  <div className="sh-item">
                    <div className="s-icon s-shopping-icon"></div>
                    <div className="s-text">Shopping</div>
                  </div>
                  <div className="sh-item">
                    <div className="s-icon s-browse-icon"></div>
                    <div className="s-text">Browse</div>
                  </div>
                  <div className="sh-item">
                    <div className="s-icon s-image-icon"></div>
                    <div className="s-text">Images</div>
                  </div>                  
                  <div className="sh-item">
                    <div className="s-icon s-screen-icon"></div>
                    <div className="s-text">Share Screen</div>
                  </div>
                </div>
            </div>

         {/*--------------------- youtube link Modal---------------------------- */}
            <div id="modal-youtubeLink" className="media-modal share-modal" style={{display:"none"}} >
                <div className="modal-header pos-re">
                    <div className="pos-ab g-back bunHover modal-back" onClick={this.changeState}><span className="small-back-icon"><ArrowBackIosIcon/></span></div>                
                    <h3>Link Sharing</h3>
                </div>
                <div className="modal-body" style={{textAlign:"center"}}>
                    <InputGroup className="mb-3 round-input">
                    <FormControl
                        placeholder="Paste your YouTube link here"
                        aria-label="YoutubeLink"
                        aria-describedby="basic-addon1"
                        style={{height:"52px"}}
                    />
                    </InputGroup>              
                    <Button className="g-back bunHover" onClick={()=>this.goHandler('go-video-link')}>Go!</Button>
                </div>            
            </div>   

      {/*--------------------- youtube Modal---------------------------- */}
            <div id="modal-youtube" className="media-modal" style={{display:"none"}} >
                <div className="modal-content share-modal">
                    <div className="modal-header pos-re">
                        <div className="pos-ab g-back bunHover modal-back" onClick={this.changeState}><span className="small-back-icon"><ArrowBackIosIcon/></span></div>                
                        <h3>Live Sharing</h3>
                    </div>
                    <div className="modal-body" style={{textAlign:"center"}}>
                    <div className="socialism">
                        <img src={'../../assets/popula/yotube.png'} alt="youtube" />
                        <h3>YouTube</h3> 
                        <div className="search-icon"></div>
                        <img src={'../../assets/popula/n.svg'} alt="nSvg" />
                    </div>

                    <div className="mt-3">
                        <iframe title="dflsf" width="100%" height="288px" src="https://www.youtube.com/embed/zCgweqpelFU?start=16" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"flex-end"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler('go-video')}>Share</Button>
                    </div>

                    <div className="mt-3">
                        <iframe title="dflsf" width="100%" height="288px" src="https://www.youtube.com/embed/zCgweqpelFU?start=16" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"flex-end"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler('go-video')}>Share</Button>
                    </div>

                    <div className="mt-3">
                        <iframe title="dflsf" width="100%" height="288px" src="https://www.youtube.com/embed/zCgweqpelFU?start=16" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"flex-end"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler('go-video')}>Share</Button>
                    </div>
                    </div>
                </div>
            </div>
      {/*--------------------- game Modal---------------------------- */}
            <div id="modal-game" className="media-modal" style={{display:"none"}} >
                <div className="modal-content share-modal">
                    <div className="modal-header pos-re">
                        <div className="pos-ab g-back bunHover modal-back" onClick={this.changeState}><span className="small-back-icon"><ArrowBackIosIcon/></span></div>                
                        <h3>Game Sharing</h3>
                    </div>
                    <div className="modal-body" style={{textAlign:"center"}}>
                    <div className="socialism">
                        <h3>Phiz Games</h3> 
                        <img src={'../../assets/popula/n.svg'} alt="nSvg" />
                    </div>
                    <div className="mt-3">
                        <img src={'../../assets/popula/game2.png'} alt="game" width={"500px"} />
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"center"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler("go-game")}>Share & Play</Button>
                    </div>

                    <div className="mt-3">
                        <img src={'../../assets/popula/game2.png'} alt="game" width={"500px"} />
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"center"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler("go-game")}>Share & Play</Button>
                    </div>

                    <div className="mt-3">
                        <img src={'../../assets/popula/game2.png'} alt="game" width={"500px"} />
                    </div>
                    <div className="shareButton-wraper mt-3" style={{justifyContent:"center"}}>
                        <Button className="g-back bunHover" onClick={()=>this.goHandler("go-game")}>Share & Play</Button>
                    </div>              
                    </div>
                </div>
            </div>
      {/* ------------------video share step modal-------------------------- */}
            <div id="modal-video-step" className="media-modal step-modal" style={{display:"none"}}>
                <div className="modal-content share-modal">
                    <div className="modal-header pos-re">
                        <div className="pos-ab g-back bunHover modal-back" onClick={this.changeState}><span className="small-back-icon"><ArrowBackIosIcon/></span></div>                
                    </div>
                    <div className="modal-body" style={{textAlign:"center", marginTop:'13px'}}>                            
                        <div className="mt-3">
                            {(this.state.go_video) && <iframe title="dflsf" width="100%" height="288px" src={this.state.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            {(this.state.go_game) && <img src={this.state.game_url} alt="game" width={"100%"} />}
                        </div>
                        <textarea id="message" placeholder="Send a message..." required="" minLength="1" maxLength="1500" className="mt-3" style={{background:"white",borderRadius:'100px', width:'98%', color:'#4E5165', fontSize:'16px', paddingTop:"8px"}}/>
                        <div className="shareButton-wraper mt-2" style={{justifyContent:"center"}}>
                            <Button className="g-back bunHover" onClick={this.sendUrl}>Go</Button>
                        </div>              
                    </div>                    
                </div>
            </div>


            </>

        )
    }
}

export default index
