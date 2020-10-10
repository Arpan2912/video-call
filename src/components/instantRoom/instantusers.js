import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import userData from '../../data/InstantUsers.json';
import $ from "jquery"


class componentName extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            t_users:[],
            pageStatus:true,
            wS:true,
            vSt:'../../assets/icons/video.svg',
            mSt:'../../assets/icons/mute.svg',
            bvSt:'../../assets/icons/video.svg',
            bmSt:'../../assets/icons/mute.svg'
        };

      this.nextUsers=this.nextUsers.bind(this);
      this.previewUsers=this.previewUsers.bind(this);
      this.remove_arr = this.remove_arr.bind(this);
      this.swichHandler=this.swichHandler.bind(this);
      this.swichHandlerB=this.swichHandlerB.bind(this);
    }
    componentDidMount(){
        this.setState({users: userData});
    }

    swichHandler(name,i){
      console.log(name,i);
      if(name==="video"){        
        var imgurl1 = (this.state.vSt === '../../assets/icons/video.svg')?'../../assets/icons/video-off.svg':'../../assets/icons/video.svg';
        this.setState({vSt:imgurl1});
        var v_show = (this.state.vSt === '../../assets/icons/video.svg')? 'flex':'none';
        document.getElementsByClassName('own-videoStopA')[i].style.display=v_show;
      }else if(name==="mute"){
        var imgurl2 = (this.state.mSt === '../../assets/icons/mute.svg')?'../../assets/icons/mic-mute.svg':'../../assets/icons/mute.svg';
        var m_show = (this.state.mSt === '../../assets/icons/mute.svg')? 'block':'none';
        this.setState({mSt:imgurl2});
        document.getElementsByClassName('mic-mute-show')[i].style.display=m_show;
      }else if(name==="volum"){
        var dis = (document.getElementsByClassName('volume-control-range')[i].style.display === "block")?"none":"block";
        document.getElementsByClassName('volume-control-range')[i].style.display=dis;
      }else{
        var imgurl3 = (this.state.vSt === '../../assets/icons/video.svg')?'../../assets/icons/video-off.svg':'../../assets/icons/video.svg';
        this.setState({vSt:imgurl3});
        var v_show1 = (this.state.vSt === '../../assets/icons/video.svg')? 'flex':'none';
        document.getElementsByClassName('own-videoStopA')[i].style.display=v_show1;
        
      }
    }

    swichHandlerB(name,i){
      console.log(name,i);
      if(name==="video"){        
        var imgurl1 = (this.state.bvSt === '../../assets/icons/video.svg')?'../../assets/icons/video-off.svg':'../../assets/icons/video.svg';
        this.setState({bvSt:imgurl1});
        var v_show = (this.state.bvSt === '../../assets/icons/video.svg')? 'flex':'none';
        document.getElementsByClassName('own-videoStopB')[i].style.display=v_show;
      }else if(name==="mute"){
        var imgurl2 = (this.state.bmSt === '../../assets/icons/mute.svg')?'../../assets/icons/mic-mute.svg':'../../assets/icons/mute.svg';
        var m_show = (this.state.bmSt === '../../assets/icons/mute.svg')? 'block':'none';
        this.setState({bmSt:imgurl2});
        document.getElementsByClassName('mic-mute-showB')[i].style.display=m_show;
      }else if(name==="volum"){
        var dis = (document.getElementsByClassName('own-volum-warraperB ')[i].style.display === "block")?"none":"block";
        document.getElementsByClassName('own-volum-warraperB ')[i].style.display=dis;
      }else{
        var imgurl3 = (this.state.bvSt === '../../assets/icons/video.svg')?'../../assets/icons/video-off.svg':'../../assets/icons/video.svg';
        this.setState({bvSt:imgurl3});
        var v_show1 = (this.state.bvSt === '../../assets/icons/video.svg')? 'flex':'none';
        document.getElementsByClassName('own-videoStopB')[i].style.display=v_show1;
      }
    }

    remove_arr(index){ 
      $(".rh-contacted-users").removeClass('unactive');
      console.log(($('.rh-face-item').length));
     
      
      if(this.state.wS){
        let arr = this.state.users;
        let arr1 = arr.splice(index,1);
        this.setState({users:arr});  
        let arr3 = arr1.toString();    
        let arr2 = this.state.t_users.concat(arr3);
        this.setState({t_users:arr2});
        if(($('.rh-face-item').length)===1){          
          $('.InsliderUsers').width(1350);
          $('.InsliderUsers').css('margin-left','5%');
          // $('.user-face-item').width(213.3);
        }
        var x = $('.rh-face-item').length+1;     
        if(x%3===0){
          this.setState({wS:!this.state.wS}); 
        }
        
      }else{
          if(($('.rh-face-item').length)<5){
            var contan_width = ($('.rh-contacted-users').width());
            var new_width =(contan_width + 300);
            $('.rh-contacted-users').width(new_width);
            if(($('.rh-face-item').length)===3){
              $('.rh-contacted-users').css('flex-direction','unset');
              $('.rh-contacted-users').css('height','fit-content');
            }
          }else{
            $('.rh-contacted-users').width(610);
            $('.rh-contacted-users').css('flex-direction','unset');
            $('.rh-contacted-users').css('overflow','auto');
            $('.InsliderUsers').css('height','auto');
          }         
          var n_w = ($(window).width())-new_width; 
          $('.InsliderUsers').width(n_w-260);
          $('.InsliderUsers').css('margin-left','5%');
          // console.log(($('.rh-face-item').length));
          // $('.user-face-item').width(200);          
          let arr = this.state.users;
          let arr1 = arr.splice(index,1);
          this.setState({users:arr});  
          let arr3 = arr1.toString();    
          let arr2 = this.state.t_users.concat(arr3);
          this.setState({t_users:arr2});
          this.setState({wS:!this.state.wS});
      } 
    }

    add_arr(index){ 
      this.setState({wS:true});
      let arr = this.state.t_users;
      let arr1 = arr.splice(index,1);
      let arr2 = this.state.users.concat(arr1);
      this.setState({users:arr2});

      // console.log(($('.rh-face-item').length));

      if(($('.rh-face-item').length)<6){
        $('.rh-contacted-users').css('flex-direction','column');
      }

      if(($('.rh-face-item').length)===4){
        $('.InsliderUsers').width(1350);
        $('.rh-contacted-users').width('auto')
        this.setState({wS:!this.state.wS});
      }

      if(($('.rh-face-item').length)===2){
        $(".rh-contacted-users").addClass('unactive');
        $('.InsliderUsers').css('width','90%');
      }
    }



    nextUsers(){
        $('.control-next').trigger('click'); 
        $('.pagePreview').css('opacity','1');
        $('.pagePreview').css('pointer-events','all');
        var status_first =  Number($('.carousel-status').text().slice(0,1));    
        var status_last =Number($('.carousel-status').text().slice(-1)) ; 
        if(status_first===status_last-1){ 
          $('.pageNext').css('opacity','0.4'); 
          $('.pageNext').css('pointer-events','none');
        }     
    }

    previewUsers(){      
      $('.control-prev').trigger('click');
      $('.pageNext').css('opacity','1');
      $('.pageNext').css('pointer-events','all');
      var status_first =  Number($('.carousel-status').text().slice(0,1));
      if(status_first===2){
        $('.pagePreview').css('opacity','0.4');
        $('.pagePreview').css('pointer-events','none');
      }
    }
  render() {
    return (
      <>
        <Carousel>
            <div className="u-first InsliderUsers">              
                { 
                  this.state.users.map((user,i)=>{
                    return (
                    <div className="user-face-item pos-re" key={i} > 
                      <div className="own-img-wrapper pos-re" onClick={()=>this.remove_arr(i)}>                    
                        <img src={user} alt="userface"/> 
                      </div>
                      <div className="chat-control pos-ab hidden-toggle" style={{ display:"none", bottom:"8px", justifyContent:"space-around", padding:"0 15%" }}>
                        <img className="instant-user-control-icon-img" src={this.state.vSt} alt="" onClick={()=>this.swichHandler('video',i)}/>                             
                        <img className="instant-user-control-icon-img" src={this.state.mSt} alt="" onClick={()=>this.swichHandler("mute",i)}/>
                        <img className="instant-user-control-icon-img" src={"../../assets/icons/volum.svg"} alt=""  onClick={()=>this.swichHandler("volum",i)}/>
                      </div>
                      <div className="own-videoStopA pos-ab" style={{top:'0',left:'0', cursor:'pointer'}} onClick={()=>this.swichHandler("own",i)}>
                        <div className="own-videoStop-icon" style={{width:'40px'}}></div>
                      </div>
                      <div className="mic-mute-show pos-ab" style={{top:'15px', left:'15px', width:'43px', height:'45px', display:'none'}} >
                        <img src={'../../assets/icons/captuer-mute-shawdow.png'} style={{width:"100%", height:"100%"}} alt=""></img>
                      </div>
                      <div className="volume-control-range pos-ab" style={{display:'none', top:'34%',right:'5%'}}>
                        <div className="slidecontainer">
                          <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                          <img src={'../../assets/icons/range-back.png'} style={{height:'10px'}} className="range-back" alt=""></img>
                        </div>
                      </div>
                    </div>
                    )
                  })
                } 
              
                               
                <div className="pageNext g-back bunHover pos-ab"  onClick={this.nextUsers}>
                    <div className="pagenext-icon"></div>
                </div>
                <div className="pagePreview g-back bunHover pos-ab" onClick={this.previewUsers}>
                    <div className="pagepreview-icon"></div>
                </div>
                <div className="share-screen-body pos-ab" style={{display:'none'}}>
                    <img  src={"../../assets/popula/Untitle.jpg"} alt=""  style={{width:'100%',height:'100%'}} />                  
                </div>
            </div>            
            <div className="u-second InsliderUsers">
            { 
                  this.state.users.map((user,i)=>{
                    return (
                    <div className="user-face-item pos-re" key={i} > 
                      <div className="own-img-wrapper pos-re" onClick={()=>this.remove_arr(i)}>                    
                        <img src={user} alt="userface"/> 
                      </div>
                      <div className="chat-control pos-ab hidden-toggle" style={{ display:"none", bottom:"8px", justifyContent:"space-around", padding:"0 15%" }}>
                        <img className="instant-user-control-icon-img" src={this.state.vSt} alt="" onClick={()=>this.swichHandler('video',i)}/>                             
                        <img className="instant-user-control-icon-img" src={this.state.mSt} alt="" onClick={()=>this.swichHandler("mute",i)}/>
                        <img className="instant-user-control-icon-img" src={"../../assets/icons/volum.svg"} alt=""  onClick={()=>this.swichHandler("volum",i)}/>
                      </div>
                      <div className="own-videoStop pos-ab" style={{top:'0',left:'0', cursor:'pointer'}} onClick={()=>this.swichHandler("own",i)}>
                        <div className="own-videoStop-icon" style={{width:'40px'}}></div>
                      </div>
                      <div className="mic-mute-show pos-ab" style={{top:'15px', left:'15px', width:'43px', height:'45px', display:'none'}} >
                        <img src={'../../assets/icons/captuer-mute-shawdow.png'} style={{width:"100%", height:"100%"}} alt=""></img>
                      </div>
                      <div className="volume-control-range pos-ab" style={{display:'none', top:'34%',right:'5%'}}>
                        <div className="slidecontainer">
                          <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                          <img src={'../../assets/icons/range-back.png'} style={{height:'10px'}} className="range-back" alt=""></img>
                        </div>
                      </div>
                    </div>
                    )
                  })
                } 
                <div className="pageNext g-back bunHover pos-ab" onClick={this.nextUsers}>
                    <div className="pagenext-icon"></div>
                </div>
                <div className="pagePreview g-back bunHover pos-ab" onClick={this.previewUsers}>
                    <div className="pagepreview-icon"></div>
                </div>
                <div className="share-screen-body pos-ab" style={{display:'none'}}>
                    <img  src={"../../assets/popula/Untitle.jpg"} alt=""  style={{width:'100%',height:'100%'}} />                  
                </div>               
            </div>

            <div className="u-third InsliderUsers">

            { 
                  this.state.users.map((user,i)=>{
                    return (
                    <div className="user-face-item pos-re" key={i} > 
                      <div className="own-img-wrapper pos-re" onClick={()=>this.remove_arr(i)}>                    
                        <img src={user} alt="userface"/> 
                      </div>
                      <div className="chat-control pos-ab hidden-toggle" style={{ display:"none", bottom:"8px", justifyContent:"space-around", padding:"0 15%" }}>
                        <img className="instant-user-control-icon-img" src={this.state.vSt} alt="" onClick={()=>this.swichHandler('video',i)}/>                             
                        <img className="instant-user-control-icon-img" src={this.state.mSt} alt="" onClick={()=>this.swichHandler("mute",i)}/>
                        <img className="instant-user-control-icon-img" src={"../../assets/icons/volum.svg"} alt=""  onClick={()=>this.swichHandler("volum",i)}/>
                      </div>
                      <div className="own-videoStopA pos-ab" style={{top:'0',left:'0', cursor:'pointer'}} onClick={()=>this.swichHandler("own",i)}>
                        <div className="own-videoStop-icon" style={{width:'40px'}}></div>
                      </div>
                      <div className="mic-mute-show pos-ab" style={{top:'15px', left:'15px', width:'43px', height:'45px', display:'none'}} >
                        <img src={'../../assets/icons/captuer-mute-shawdow.png'} style={{width:"100%", height:"100%"}} alt=""></img>
                      </div>
                      <div className="volume-control-range pos-ab" style={{display:'none', top:'34%',right:'5%'}}>
                        <div className="slidecontainer">
                          <input type="range" min="1" max="100" className="sliderA" id="myRange"/> 
                          <img src={'../../assets/icons/range-back.png'} style={{height:'10px'}} className="range-back" alt=""></img>
                        </div>
                      </div>
                    </div>
                    )
                  })
                } 
                <div className="pageNext g-back bunHover pos-ab" onClick={this.nextUsers}>
                    <div className="pagenext-icon"></div>
                </div>
                <div className="pagePreview g-back bunHover pos-ab" onClick={this.previewUsers}>
                    <div className="pagepreview-icon"></div>
                </div>
                <div className="share-screen-body pos-ab" style={{display:'none'}}>
                    <img  src={"../../assets/popula/Untitle.jpg"} alt=""  style={{width:'100%',height:'100%'}} />                  
                </div>               
            </div>             
        </Carousel>


        <div className="rh-contacted-users pos-ab unactive">
          { 
              this.state.t_users.map((t_user,i)=>{
                return (
                <div className="user-face-item rh-face-item pos-re" key={i}> 
                  <div className="own-img-wrapper" onClick={()=>this.add_arr(i)}>                     
                    <img src={t_user} alt="userface"/>
                  </div>
                  <div className="chat-control pos-ab hidden-toggle" style={{ display:"none", bottom:"8px", justifyContent:"space-around", padding:"0 15%" }}>
                        <img className="instant-user-control-icon-img" src={this.state.bvSt} alt="" onClick={()=>this.swichHandlerB('video',i)}/>                             
                        <img className="instant-user-control-icon-img" src={this.state.bmSt} alt="" onClick={()=>this.swichHandlerB("mute",i)}/>
                        <img className="instant-user-control-icon-img" src={"../../assets/icons/volum.svg"} alt=""  onClick={()=>this.swichHandlerB("volum",i)}/>
                      </div>
                      <div className="own-videoStopB pos-ab" style={{top:'0',left:'0', cursor:'pointer'}} onClick={()=>this.swichHandlerB("own",i)}>
                        <div className="own-videoStop-icon" style={{width:'40px'}}></div>
                      </div>
                      <div className="mic-mute-showB pos-ab" style={{top:'15px', left:'15px', width:'43px', height:'45px', display:'none'}} >
                        <img src={'../../assets/icons/captuer-mute-shawdow.png'} style={{width:"100%", height:"100%"}} alt=""></img>
                      </div>
                      <div className="own-volum-warraperB pos-ab" style={{display:'none'}}>
                        <div className="own-volumB own-control" >
                          <div className="slidecontainer">
                            <input type="range" min="1" max="100" className="sliderB" id="myRange"/> 
                            <img src={'../../assets/icons/range-back.png'} className="range-back" style={{height:"18px",top:"30px" }} alt=""></img>
                          </div>
                        </div>
                      </div>
                </div>
                )
              })
            } 
            <div className="user-face-item rh-face-item pos-re"> 
                <div className="own-img-wrapper">                     
                    <img className="o-f-c" src={'../../assets/profile/img_avatar 1.png'} alt="userface" style={{width:'100%',height:'100%'}}/>
                </div>               
                <div className="own-videoStop">                                                                      
                    <div className="own-videoStop-icon"></div>
                </div>
                <div className="mute-wraper">
                    <img src={'../../assets/icons/captuer-mute-black.png'} alt="captuer-mute" style={{width:"100%", height:"100%"}}></img>
                </div>
                <div className="emmoji-show-body">
                  <div className="e-wrapper">
                      <p className="s-emmiji">{String.fromCodePoint(this.props.handEmjod)}</p>
                  </div>
                </div>
            </div>
        </div>

      </>
    )
  }
}

export default componentName
