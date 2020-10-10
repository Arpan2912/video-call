import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Micselect from '../ui-select/index';
import AcoSwitch from '../ui-switch/index';
import $ from "jquery"


export class cameraSetting extends Component {
    constructor(props){
        super(props);
        this.state={
            process:"close",
            mi_phone:false,
            micCheck:false,  
            cameraCheck:false          
        }
    
        this.aa = this.aa.bind(this); 
        this.checkHandler = this.checkHandler.bind(this); 
        this.handleProcess = this.handleProcess.bind(this); 
    }

    componentDidMount(){
        var video = document.querySelector("#videoEle");
			//access webcam script
			if (navigator.mediaDevices.getUserMedia) {
			  navigator.mediaDevices.getUserMedia({ video: true })
			    .then(function (stream) {
			      video.srcObject = stream;
			    })
			    .catch(function (err0r) {
			      console.log("Something went wrong!");
			    });
			}
    }

    aa(text) {
        if(text==='checked'){
            this.setState({mi_phone: true}, ()=>{
                console.log("mi_phone:")
                console.log(this.state.mi_phone);
                if( (this.state.mi_phone) && (this.state.cameraCheck) && (this.state.micCheck) ){
                    this.setState({process:"PROCEED"})
                }else{
                    this.setState({process:"close"})
                }
            });
        }

    }

    checkHandler(txt){
        if(txt==="camera"){
            this.setState({cameraCheck:!this.state.cameraCheck}, ()=>{
                if( (this.state.mi_phone) && (this.state.cameraCheck) && (this.state.micCheck) ){
                    this.setState({process:"PROCEED"})
                }else{
                    this.setState({process:"close"})
                }
            });            
            $('.camera-wraper').toggleClass('bor');
            
        }else{
            this.setState({micCheck:!this.state.micCheck},()=>{
                if( (this.state.mi_phone) && (this.state.cameraCheck) && (this.state.micCheck) ){
                    this.setState({process:"PROCEED"})
                }else{
                    this.setState({process:"close"})
                }
            });     
            $('.mic-wraper').toggleClass('bor');
            $('.mic-select-img').toggleClass('back-change');
        }     
        
    }

    handleProcess(){
        if(this.state.process==="close"){
            $('#modal-camera-setting').slideToggle();
        }else{
            $('#modal-camera-setting').slideToggle();
            $(".full-background").css("display","none");
            $('.own-captuer').css("display","block");
            $('.content-footer').css('margin-right','280px');
            $('.join-now-btn').slideToggle();
            $('.own-controll').slideToggle();

        }
    }




    render() {
        return (
            <div className="modal-content share-modal">
            <div className="modal-header pos-re">
                <div className="pos-ab g-back bunHover modal-back"><span className="small-back-icon"><ArrowBackIosIcon/></span></div>                
                <h3>Media Devices</h3>
            </div>
            <div className="modal-body" style={{textAlign:"center"}}>
                <div className="device-wrapper">
                    <div className="device-select">
                        <div className='device-select-wrapper camera-wraper pos-re' onClick={()=>this.checkHandler("camera")}>
                            {/* <img src={"../../assets/profile/img_avatar 1.png"} alt="own-camera"></img> */}
                            <video className="webcam-view-large" autoPlay={true} id="videoEle" controls></video>
                            <img src={"../../assets/popula/deviceCheck.png"} alt="own-camera" className={(this.state.cameraCheck)?"device-check":'uncheck'}></img>
                        </div>
                        <h5 className="mt-3">Front camera (5986:0548)</h5>                        
                    </div> 
                    <div className="device-select">
                        <div className="device-select-wrapper mic-wraper pos-re" onClick={()=>this.checkHandler("mic")}>
                            <div className="mic-select-img"></div>
                            <img src={"../../assets/popula/deviceCheck.png"} alt="own-camera" className={(this.state.micCheck)?"device-check":'uncheck'}></img>
                        </div>
                        <h5 className="mt-3">Microphone only</h5> 
                    </div> 
                </div>

                <div className="device-wrapper">
                    <div className="sound-select">
                        <div style={{width:"485px"}}>
                            <Micselect aa={this.aa}/>
                        </div>
                        <div style={{width:"65px"}}>
                            <div className="mic-select-img2"></div>
                        </div>
                    </div>                   
                </div>

                <div className="echo-cancellation">
                    <div style={{fontSize:'20px'}}>
                        ACOUSTIC ECHO CANCELLATION
                    </div>
                    <div>
                        <AcoSwitch/>
                    </div>
                </div> 

                <div className="device-wrapper">
                    <Button className="g-back bunHover" onClick={this.handleProcess}>{this.state.process}</Button>
                </div>

            </div>
          </div>
        )
    }
}

export default cameraSetting
