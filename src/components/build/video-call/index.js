import React, { Component } from 'react'
import friendData from '../../../data/friendData.json'

import $ from "jquery"

export class videoCall extends Component {

    constructor(props){
        super(props);
        this.state = {
            fr_data:friendData,
            f_key: 0,          
            f_name:'',
            fr_v_call:true,
            fr_v_cont:true,
            vSt:'../../assets/icons/video.png',
            mSt:'../../assets/icons/mute.png',
        };

        this.friendCameraControl=this.friendCameraControl.bind(this);
        this.swithControl=this.swithControl.bind(this);
        
    } 

    componentDidMount(){
        setTimeout(() => { 
            $(".fr-connecting-prloader").toggleClass('dn');
            $(".fr-video-call-container").fadeToggle();
        }, 3600);
    }

    friendCameraControl(name){
        console.log(name);
        if(name==="fr_mute"){
            $('.fr-mute').slideToggle();
            if(this.state.fr_v_call){
                this.setState({fr_v_call:false});
            }else{
                this.setState({fr_v_call:true});
            }
        }else if(name==="fr_volume"){
            if(this.state.fr_v_cont){
                $('.fr-volum').css('display','block');
                this.setState({fr_v_cont:!this.state.fr_v_cont});
            }else{
                $('.fr-volum').css('display','none');
                this.setState({fr_v_cont:!this.state.fr_v_cont});
            }

           
        }else{
            this.props.pCall(name);
        }
    }
    
    swithControl(name){
        console.log(name);
        if(name==="volume"){
            var dis = (document.getElementsByClassName('randomUser-volum-warraper')[1].style.display === "block")?"none":"block";
          document.getElementsByClassName('randomUser-volum-warraper')[1].style.display=dis;
        }else if(name==='mute'){
            var imgurl2 = (this.state.mSt === '../../assets/icons/mute.png')?'../../assets/icons/captuer-mute.png':'../../assets/icons/mute.png';
            var m_show = (this.state.mSt === '../../assets/icons/mute.png')? 'block':'none';
            this.setState({mSt:imgurl2});
            document.getElementsByClassName('users-mic-mute')[1].style.display=m_show;        
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

    

    render() {
        return (
            <>
            <div className="fr-connecting-prloader">
                <h2 className="ml-5">ESTABLISHING VIDEO CONNECTION TO <br/> {this.state.fr_data[this.props.fr_videoCall]["name"]}</h2>
                <div className="fr-pre-loader-container">
                    <div className="face-wrapper own-c-face">
                        <img src={'../../assets/profile/img_avatar 1.png'} alt=""></img>
                    </div>
                    <div  className="connect-loader">
                        <img src={'../../assets/popula/fr-connection.svg'} alt=""></img>
                    </div>
                    <div className="face-wrapper fr-c-face">
                        <img src={this.state.fr_data[this.props.fr_videoCall]["face"]} alt=""></img>
                    </div>
                </div>
            </div>


            <div className="fr-video-call-container pos-re" style={{display:'none'}}>

{/* friend */}
                <div className="fr-c-camerra">
                    <div className="camerra-wrraper f-c-w">
                        <img className="f-c-video" src={this.state.fr_data[this.props.fr_videoCall]["face"]} alt=""></img>
                        <div className="users-mic-mute pos-ab fr-mute" style={{top:'25px', left:'15px', width:'90px', height:'100px', display:'none'}} >
                            <img src={'../../assets/icons/captuer-mute-shawdow.png'} alt="" style={{width:"100%", height:"100%"}}></img>
                        </div>
                        <div className="randomUser-volum-warraper pos-ab fr-volum" style={{display:'none'}}>
                            <div className="own-volum own-control">
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                                    <img src={'../../assets/icons/range-back.png'} alt="" className="range-back" style={{height:"28px",top:"9px" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>                  

                    <div className="fr-v-control-wrapper">
                        <div className={(this.state.fr_v_call)?"fr-v fr-v-m":"fr-v fr-v-m g-back"} onClick={()=>this.friendCameraControl("fr_mute")}>
                            <div className={(this.state.fr_v_call)?"fr-v-m-icon":'fr-v-m-icon fr-m-active'}></div>
                        </div>
                        <div className="fr-v-c" onClick={()=>this.friendCameraControl("fr_callend")}>
                            <div className="fr-v-c-icon"></div>
                        </div>
                        <div className="fr-v fr-v-v" onClick={()=>this.friendCameraControl("fr_volume")}>
                            <div className="fr-v-v-icon"></div>
                        </div>
                    </div>
                </div>


{/* own */}
                <div className="pos-ab" style={{bottom:"0",right:'40px', width:"fit-content"}}>
                    <div className="fr-c-own pos-re">
                        <div className="camerra-wrraper o-c-w">
                            <img className="o-c-video" src={'../../assets/profile/img_avatar 1.png'} alt=""></img>
                            <div className="own-videoStop pos-ab user-camera" style={{top:'0',left:'0', borderRadius:"20px", zIndex:'3'}} onClick={()=>this.swithControl("own")}>
                                <div className="own-videoStop-icon" style={{width:'120px'}}></div>
                            </div>
                        </div>
                        <div className="randomUser-volum-warraper pos-ab" style={{display:'none'}}>
                            <div className="own-volum own-control">
                                <div className="slidecontainer">
                                <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                                <img src={'../../assets/icons/range-back.png'} alt="" className="range-back" style={{height:"20px",top:"28px" }}></img>
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
            </div>
            </>
        )
    }
}

export default videoCall
