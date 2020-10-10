import React, { Component } from 'react'
import '../../css/instant-video-room.css'
import { P } from '../styles'
import $ from "jquery"
import RandomUser from '../../data/randomUser.json'
import Emmojis from '../../data/emmoji.json'


import ChatBot from '../build/r-chatbox'


var ii=0;
var min=0;
var sec=0;

export class instant_room extends Component {

    constructor(props){
        super(props);
        this.state={
            randomuser:[], 
            emmojis:[],
            imageurl:'',        
            mr: true,
            own:true,
            recordedtime:'',
            vSt:'../../assets/icons/video.png',
            mSt:'../../assets/icons/mute.png',
            
        }
        this.chatBoxShow=this.chatBoxShow.bind(this);  
        this.changeUser=this.changeUser.bind(this); 
        this.getTime=this.getTime.bind(this);   
        this.stopTime=this.stopTime.bind(this);  
        this.cleartime=this.cleartime.bind(this);
        this.swithControl=this.swithControl.bind(this);
    }



    componentDidMount(){
        this.setState({emmojis: Emmojis}); 
        this.setState({randomuser: RandomUser}); 
        this.setState({imageurl:RandomUser[Math.floor(Math.random() * 5)]});
    
        setTimeout(() => { 
            $("#preloder").css('display', 'none');
            $("body").addClass("open");
            $('.user-video-preloader').css('display', 'flex');
        }, 2000);

        setTimeout(() => {
            $('.user-video-preloader').css('display', 'none');
            $('.random-ueserCaptuer').css('display', 'block');
        }, 6000);


        if (window.history && window.history.pushState) {

            window.history.pushState('random_room', null, './random_room');
        
            $(window).on('popstate', function() {
                $("body").removeClass("open");
            });
        }    
        
               
    }

    swithControl(name){
        console.log(name);
        if(name==="volume"){
            var dis = (document.getElementsByClassName('randomUser-volum-warraper')[0].style.display === "block")?"none":"block";
          document.getElementsByClassName('randomUser-volum-warraper')[0].style.display=dis;
        }else if(name==='mute'){
            var imgurl2 = (this.state.mSt === '../../assets/icons/mute.png')?'../../assets/icons/captuer-mute.png':'../../assets/icons/mute.png';
            var m_show = (this.state.mSt === '../../assets/icons/mute.png')? 'block':'none';
            this.setState({mSt:imgurl2});
            document.getElementsByClassName('users-mic-mute')[0].style.display=m_show;        
        }else{
            console.log('vidioStop');
            var imgurl1 = (this.state.vSt === '../../assets/icons/video.png')?'../../assets/icons/video-stopA.png':'../../assets/icons/video.png';
            this.setState({vSt:imgurl1});
            var v_show = (this.state.vSt === '../../assets/icons/video.png')? 'flex':'none';
            var v_h = (this.state.vSt === '../../assets/icons/video.png')? '22px':'15px';
            document.getElementsByClassName('user-camera')[0].style.display=v_show;
            document.getElementsByClassName('random-u-cp-stop')[0].style.height=v_h;
        }
    }

    chatBoxShow(){
        if(this.state.mr){
            $(".video-interface-section").css('margin-right', '440px');
            $(".video-interface-section").css('margin-left', '0');
            $(".video-interface-section").css('padding', '5% 10% 6%');
            $('.randomUser-volum-warraper').css('bottom','16.5%');
            $('.randomUser-volum-warraper').css('left','16%');
        }else{
            $(".video-interface-section").css('margin-right', '10%');
            $(".video-interface-section").css('margin-left', '10%');
            $(".video-interface-section").css('padding', '3% 6%');
            $('.randomUser-volum-warraper').css('bottom','15%');
            $('.randomUser-volum-warraper').css('left','22%');
        }
        $(".hidden-bottom").slideToggle();        
        this.setState({mr:!this.state.mr});
    }

    changeUser(){           
        $('.user-video-preloader').css('display', 'flex');
        $('.random-ueserCaptuer').css('display', 'none');
        setTimeout(() => {
            $('.user-video-preloader').css('display', 'none');
            $('.random-ueserCaptuer').css('display', 'block');
        }, 4000);
        var img_url= this.state.randomuser[Math.floor(Math.random() * 5)]
        this.setState({imageurl:img_url});           
    }

    stopTime(){
        // console.log("test");
        this.intervalID = setInterval(()=>{this.getTime()}, 1000);
    }

    cleartime(){
        // alert();
        ii=0;
        clearInterval(this.intervalID)
        this.setState({recordedtime:''});
        var newtime="00:00";
        // console.log(newtime);
        this.setState({recordedtime:newtime});
    }

    getTime(){
        // console.log("sdfsdf");
        var result;
        ii++;
        sec = ii % 60;
        min = Math.floor(ii/60);                
        sec = ("0" + sec).slice(-2);
        min = ("0" + min).slice(-2);
        result = min + ":" + sec;
        this.setState({recordedtime:result});
        console.log(this.state.recordedtime);
    }

    render() {
        return ( 
            <>          
            <div className="instant-video-room-container">

                 <div id="preloder">
                    <div className="loader">
                        <img src={'../../assets/icons/loading.gif'} alt="loading"/>
                    </div>
                </div>
                <div className="panel left"></div>
                <div className="panel right"></div>

                <div className="instant-video-room-header-conatiner pos-re">
                    <div className="d-flex">
                        <div>
                            <img src={'../../assets/icons/phiz_icon.png'} alt="phiz icon"/>
                        </div>
                        <div className="ml-4 mr-4 horizontal-center">
                            <P fontWeight="bold" color="#FF8300" fontSize="20px" uppercase="uppercase">RANDOM CONNECT</P>                            
                         </div>
                    </div>

                    <div className="screen-recod-wrapper" style={{display:"none"}}>                
                        <div className="recoding-alram"></div>
                        <div className="recoding-time" id="recordedTime">{this.state.recordedtime}</div>
                    </div>
                </div>

                <div className="webCam-content">
                    <div className="video-interface-section">
                        <div className="video-interface own-left pos-re">
                            <div className="video-capture">
                                <div className="onwVideo-stop pos-re">                                                                      
                                    <div className="own-videoStop-icon"></div>
                                </div>
                                <div className="mute-wraper">
                                    <img src={'../../assets/icons/captuer-mute.png'} alt="captuer-mute" style={{width:"100%", height:"100%"}}></img>
                                </div>
                                <img src={'../../assets/profile/avata3.png'} alt="phiz icon" className="onwVideo"></img>                               
                            </div>                                                      
                        </div>
                        <div className="video-interface random-right pos-re" >
                            <div className="video-capture pos-re" >
                                <div className="user-video-preloader pos-re">
                                    <div className="search-animation">
                                        <img src={"../../assets/icons/skip-preloader.svg"} alt="" style={{width:"100px", height:"100px"}}/>
                                    </div>                                   
                                    <div className="center-circle"></div>
                                </div> 
                                
                                <div className="own-videoStop pos-ab user-camera" style={{top:'0',left:'0', cursor:'pointer', borderRadius:"10px", zIndex:'3'}} onClick={()=>this.swithControl("own")}>
                                    <div className="own-videoStop-icon" style={{width:'120px'}}></div>
                                </div>                               
                                <img src={this.state.imageurl} alt="phiz icon" className="random-ueserCaptuer" style={{display:"none"}}></img>
                                <div className="randomUser-volum-warraper pos-ab" style={{display:'none'}}>
                                    <div className="own-volum own-control">
                                        <div className="slidecontainer">
                                        <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                                        <img src={'../../assets/icons/range-back.png'} className="range-back" alt="" style={{height:"20px",top:"28px" }}></img>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                            <div className="users-mic-mute pos-ab" style={{top:'17px', left:'8px', width:'76px', height:'77px', display:'none'}} >
                                <img src={'../../assets/icons/captuer-mute-shawdow.png'} alt="" style={{width:"100%", height:"100%"}}></img>
                            </div>

                            <div className="video-chat-control pos-ab" style={{zIndex:'4'}}>
                                <div className="contorl-group">
                                    <div className="control-icon g-back" onClick={()=>this.swithControl("volume")}>
                                        <img  src={"../../assets/icons/volum.png"} alt="" style={{width:"28px", height:"28px"}}/>
                                    </div>
                                    <div className="control-icon g-back" onClick={()=>this.swithControl("mute")}>
                                        <img  src={this.state.mSt} alt="" style={{width:"28px", height:"28px"}}/>
                                    </div>
                                    <div className="control-icon g-back" onClick={()=>this.swithControl("video")}>
                                        <img  src={this.state.vSt} alt="" className="random-u-cp-stop" style={{width:"25px", height:"15px"}}/>
                                    </div>
                                </div>                                                   
                            </div>                            
                        </div>
                    </div>
                    <div className="hidden-bottom">
                        <div className="chat-box-body">                        
                            <ChatBot />                        
                        </div>
                    </div>
                    <div className="emmoji-show pos-ab">                        
                        <div className="emmoji-wraper">
                            <div className="getmore-wrapper">
                                <div className="getmorebtn g-back bunHover">Get More</div>
                            </div>
                            <div className="pt-0 emmojis-items">
                            { 
                                this.state.emmojis.map((emmoji,i)=>{
                                    return (
                                    <p key={i}>{String.fromCodePoint(emmoji)}</p>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instant-video-room-bottom-container">
                    <div className="">  </div>
                    <div className="instant-video-room-control-container" style={{marginLeft:"6%"}}>

                        <div className="instant-room-button-container g-back bunHover inside-white" onClick={()=>{
                            $("body").removeClass("open");
                            this.props.history.push('/dashboard/home')
                        }}>
                            <div className="exit-icon"/>
                            <P fontSize="17px" >End</P>
                        </div>

                        <div className="instant-room-button-container"  onClick={()=>{
                            if(this.state.own){
                                $('.mute-wraper').css("display","block");
                                $('.mic-icon').css('background-color', '#ff8300');
                                $('.mic-text').css('color', '#ff8300');                               
                                this.setState({own:!this.state.own});
                            }else{
                                $('.mute-wraper').css("display","none");
                                $('.mic-icon').css('background-color', '#4E5165');
                                $('.mic-text').css('color', '#4e5165');
                                this.setState({own:!this.state.own});
                            }
                        }}>
                            <div className="mic-icon"/>
                            <P fontSize="17px" className='mic-text'>Mute</P>                            
                        </div>

                        <div className="instant-room-button-container" onClick={()=>{
                           if(this.state.own){
                                $('.camera-icon').addClass('uncamera');
                                $(".stop-video-text").css('color','#ff8300');
                                $('.onwVideo').css('display','none');
                                $('.onwVideo-stop').css('display','flex');
                                this.setState({own:!this.state.own});
                           }else{
                                $('.camera-icon').removeClass('uncamera');
                                $(".stop-video-text").css('color','#4e5165');
                                $('.onwVideo').css('display','block');
                                $('.onwVideo-stop').css('display','none');
                                this.setState({own:!this.state.own});
                           }
                        }}>
                            <div className="camera-icon"/>
                            <P fontSize="17px" className="stop-video-text">Stop video</P>
                        </div>

                        <div className="instant-room-button-container recode-start" onClick={()=>{
                            if(this.state.own){
                                $("#chip").css('border', '7px solid red');
                                $('.screen-recod-wrapper').css('display','flex');
                                $('.recode-stop').css('display','flex');
                                $('.recode-start').css('display','none');
                                this.stopTime(); 
                                this.setState({own:!this.state.own}); 
                            }
                        }}>
                            <div className="record-icon"/>
                            <P fontSize="17px">Record</P>
                        </div>                        
                        <div className="instant-room-button-container recode-stop" style={{display:"none"}} onClick={()=>{
                            if(!(this.state.own)){
                                $('.recode-stop').css('display','none');
                                $('.recode-start').css('display','flex');
                                $("#chip").css('border', 'none');
                                $('.screen-recod-wrapper').css('display','none');
                                this.cleartime();
                                this.setState({own:!this.state.own});
                            }
                        }}>
                            <div className="recode-stop-icon"/>
                            <P fontSize="17px" style={{color:"red"}} >Stop</P>
                        </div>

                        <div className="instant-room-button-container" onClick={()=>{
                            if(this.state.own){
                                $('.emmoji-show').slideToggle();
                                $('.emoji-icon').css('background-color', '#ff8300');
                                $('.emmoji-text').css('color', '#ff8300'); 
                                this.setState({own:!this.state.own}); 
                            }else{
                                $('.emmoji-show').slideToggle();
                                $('.emoji-icon').css('background-color', '#4E5165');
                                $('.emmoji-text').css('color', '#4E5165'); 
                                this.setState({own:!this.state.own}); 
                            }
                        }}>
                            <div className="emoji-icon"/>
                            <P fontSize="17px" className="emmoji-text">Emojis</P>
                        </div>
                        <div className="instant-room-button-container g-back bunHover inside-white" onClick={this.changeUser}>
                            <div className="skip-icon"/>
                            <P fontSize="17px">Skip</P>
                        </div>
                    </div>
                    <div className="instant-room-button-container" onClick={this.chatBoxShow}>
                        <div className="chart-icon"/>
                        <P fontSize="17px">Chart</P>
                    </div>
                </div>
                
            </div>
                        {/*----------- sreen recoder---------------- */}
           
        </>
        )
    }
}

export default instant_room
