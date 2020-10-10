import React, { Component } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import serverData from '../../../../data/serverData.json'
import frindsData from '../../../../data/friendData.json'
import roomData from '../../../../data/followRoom.json'
import { Button } from '@material-ui/core';
import {Route} from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card} from 'react-bootstrap';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import $ from "jquery"
import RequestData from '../../ui-dataInput/index';

const settings  = [
    {
        id: 1,
        url: '../../assets/gameImg/icon-global.png',
        name:'Play Global'
    },

    {
        id: 2,
        url: '../../assets/gameImg/icon-withfriend.png',
        name:'Play with Friends'
    },

    {
        id: 3,
        url: '../../assets/gameImg/icon-withroom.png',
        name:'Play with Room Friends'
    },

    {
        id: 4,
        url: '../../assets/gameImg/icon-battle.png',
        name:'Inter Room Battle'
    },
  ];


export class playgamepre extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            arrname:'Play Setting',
            servers:serverData,
            active:'inite',
            flag:true,
            friends:frindsData,
            s_friends:[],
            rooms:roomData,
            w_room:[],
        };
        this.closeModal = this.closeModal.bind(this);
        this.friendsSelect = this.friendsSelect.bind(this);
        this.selectedFriendHandler = this.selectedFriendHandler.bind(this);   
        this.removefriends = this.removefriends.bind(this);    
        this.withRoomSelecter = this.withRoomSelecter.bind(this);
        this.removeWithRoom = this.removeWithRoom.bind(this);
    }
    
    componentDidUpdate(){
        $('.request-date-data').find('.form-control').attr('placeholder','Date (mm/dd/yyyy) && Time (12 hr format)'); 
        
    }

    enterHandeler(card_number){ 
        console.log(card_number);   
        let arr_name = ["Gloabal Playing","Play with Friends","Play with Room Friends","Inter Room Battle","Battle Request Sent"];
        this.setState({arrname:arr_name[card_number]});
        if(card_number === 4){
            setTimeout(
                function() {
                    this.setState({active:'inite'})
                    $('.play-pre-modal').addClass('pre-modal-close');
                    $('.bright-fillter').addClass('dn');                  
                }
                .bind(this),
                3000
            );

            setTimeout(
                function() {
                    $('.play-pre-modal').removeClass('pre-modal-close');
                    this.props.modalclose('home');
                }
                .bind(this),
                3600
            );
        }
    }

    friendsSelect(){
        $('.fr-se').removeClass('erro-fr-se');
        if(this.state.flag){
          $(".select-arrow-icon").css("transform" , "rotate(180deg)")
        }else{
          $(".select-arrow-icon").css("transform" , "rotate(0deg)")
        }
          $(".hidden-item-list").slideToggle();
         this.setState({flag:!this.state.flag})         
    };

    

    closeModal(){
        if(this.state.arrname !== 'Play Setting'){
            this.setState({arrname: 'Play Setting'})           
        }else{
            $('.play-pre-modal').addClass('pre-modal-close');
            $('.bright-fillter').addClass('dn');
            setTimeout(
                function() {
                    $('.play-pre-modal').removeClass('pre-modal-close');
                    this.props.modalclose('close');
                }
                .bind(this),
                600
            );
        }
    }



// select settings for game play--------------------------------

    selectServer(j) { 
        this.setState({ active: j });
    }

    selectedFriendHandler(index){
        this.setState({ active: index });
        if((this.state.s_friends.length)<=3){
            // console.log(this.state.s_friends);
            let arr = this.state.friends;
            let arr1 = arr[index];        
            let arr2 = this.state.s_friends.concat(arr1);
            this.setState({s_friends:arr2});
        }else{
            $('.fr-se').toggleClass('erro-fr-se');
        }
    }

    removefriends(re_id){
        let arr = this.state.s_friends;
        arr.splice(re_id,1);
        this.setState({s_friends:arr});
    }

    withRoomSelecter(r, rw) { 
        this.setState({ active: rw });    
        let me = this.state.rooms[r].content[rw]
        this.setState({w_room:me})
        $(".hidden-item-list").slideToggle();
        $(".select-arrow-icon").css("transform" , "rotate(0deg)")
        this.setState({flag:true})  
    }

    removeWithRoom(){
        this.setState({w_room:[]})
    }

// modal contents--------------------------------------------------------------------------------

    Settings(){
        return settings.map((setting, i) => {
           return (
            <div className="game-setting-card" key={i} onClick={()=>this.enterHandeler(i)}>
                <div className="setting-card-img-wrapper">
                    <img src={setting.url} alt=""></img>
                </div>
                <h4>{setting.name}</h4>
            </div>
           )
        })     
    }
    
    Settings1(){
        return (
            <div className="step-modal global-modal">
                <div className="justifyBeetween">
                    <div className="modal-logo-card">
                        <div className="game-setting-card">
                            <div className="setting-card-img-wrapper">
                                <img src={settings[0].url} alt=""></img>
                            </div>
                            <h4>{settings[0].name}</h4>
                        </div>
                    </div>
                    <div className="sever-wraper">
                        { 
                            this.state.servers.map((server,j)=>{
                            return (
                                <div className={(this.state.active === j)?"server-item checked-server":"server-item"}  key={j}  onClick={this.selectServer.bind(this,j)}>
                                    <img src={server.s_flag}  alt="flag"></img>
                                    <h4>{server.s_name}</h4>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="step-modal-button-wrapper" style={{marginTop:"100px"}}>
                    <Route render={({ history}) => (                        
                        (
                           (this.state.active !== "inite")?
                            <Button className="g-back bunHover" onClick={() => { 
                                history.push('/globalPlay')
                            }}>Enter</Button>

                            :    

                            <Button className="g-back bunHover" style={{pointerEvents:'none'}} >Enter</Button>
                        )
                    )} />
                    <Button className="t-back bugHover">Cancel</Button>
                </div>
            </div>
        )
        
    }

    Settings2(){
        return (
            <div className="step-modal withfriend">
                <div className="justifyBeetween" style={{padding:'0 30px', columnGap:'30px'}}>
                    <div className="modal-logo-card">
                        <div className="game-setting-card">
                            <div className="setting-card-img-wrapper">
                                <img src={settings[1].url} alt=""></img>
                            </div>
                            <h4>{settings[1].name}</h4>
                        </div>
                    </div>
                    <div className="select-friend-wrapper">                        
                        <div className="pos-re custom-select justify-align-center select-user">                       
                            <span onClick={this.friendsSelect} className="fr-se-in-wrapper"><input type="text" className="select-friend-input fr-se" disabled placeholder="Select 4 Friends to form a team" ></input></span>
                            <ExpandMoreIcon className="select-arrow-icon" style={{right:'20px'}}/>
                            <ul className="hidden-item-list" style={{width:'77%', top:'62px',maxHeight:'44.8vh', overflow:'auto', zIndex:'5'}}>
                            { 
                                this.state.friends.map((friend,k)=>{
                                return (
                                    <li key={k} style={{paddingLeft:'8px'}} onClick={(friend.isonlin)?()=>this.selectedFriendHandler(k):null}>
                                        <div className="horizontal-center">
                                            <span className='mr-2'><FiberManualRecordIcon className={(friend.isonlin)?'isonline-dot': 'offline'} style={{fontSize:'21px'}} /></span>
                                            <span className="u-profile">
                                                <img src={friend.face} width={"35px"} alt=""></img>
                                            </span>
                                            <span className="r-name mt-0" style={{fontSize:"14px"}}>{friend.name}</span>
                                        </div>
                                    </li> 
                                    )
                                })
                            } 
                            </ul>
                        </div>
                        <div className= "selected-friends-wrapper">
                            {
                                this.state.s_friends.map((s_friend,sj)=>{
                                    return(
                                        <div className="horizontal-center re-fr-item" key={sj} style={{padding:'11px 0'}} onClick={()=>this.removefriends(sj)}>
                                            <span className='mr-2'><FiberManualRecordIcon className={(s_friend.isonlin)?'isonline-dot': 'offline'} style={{fontSize:'21px'}} /></span>
                                            <span className="u-profile">
                                                <img src={s_friend.face} width={"35px"} alt=""></img>
                                            </span>
                                            <span className="r-name mt-0" style={{fontSize:"14px", color:'white'}}>{s_friend.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="step-modal-button-wrapper" style={{margin:"60px 0px 32px"}}>
                    <Route render={({ history}) => (                        
                        (
                           (this.state.active !== "inite")?
                            <Button className="g-back bunHover" onClick={() => { 
                                $('.bright-fillter').addClass('dn');
                                history.push({
                                    pathname : '/dashboard/friends',
                                    state : this.state.s_friends 
                                });                                
                            }}>Enter</Button>

                            :    

                            <Button className="g-back bunHover" style={{pointerEvents:'none'}} >Enter</Button>
                        )
                    )} />
                    <Button className="t-back bugHover">Cancel</Button>
                </div>
            </div>
        )
    }

    Settings3(){        
        return (
            <div className="step-modal withfriend">
                <div className="justifyBeetween" style={{padding:'0 30px', columnGap:'30px'}}>
                    <div className="modal-logo-card">
                        <div className="game-setting-card">
                            <div className="setting-card-img-wrapper">
                                <img src={settings[2].url} alt=""></img>
                            </div>
                            <h4>{settings[2].name}</h4>
                        </div>
                    </div>
                    <div className="select-friend-wrapper">                        
                        <div className="pos-re custom-select justify-align-center select-user">                       
                            <span onClick={this.friendsSelect} className="fr-se-in-wrapper"><input type="text" className="select-friend-input fr-se" disabled placeholder="Select Rooms" ></input></span>
                            <ExpandMoreIcon className="select-arrow-icon" style={{right:'20px'}}/>
                            <div className="hidden-item-list" style={{width:'77%', top:'62px',zIndex:'5',border:'none',padding:'15px 0',}}>
                                <div style={{maxHeight:'59vh', overflow:'auto'}}>
                                    { 
                                        this.state.rooms.map((room,r)=>{
                                        return (
                                            <div className="with-room-wrapper" key={r} style={{paddingLeft:'39px', marginBottom:'30px'}}>
                                                <h5 className='mt-2 mb-3' style={{color:'#ff8300'}}>{room.name}</h5>
                                                <div className='flexWrap' style={{justifyContent:'flex-start', columnGap:'40px', rowGap:'40px'}}>
                                                    {
                                                        room.content.map((s_room,rw)=>{
                                                            return(
                                                                <div key={rw} className='small-custom-roomcard-body' onClick={()=>this.withRoomSelecter(r,rw)}>
                                                                    <Card className="room-card small-card resize-wh">
                                                                        <div className="img-body">
                                                                            <Card.Img variant="top" src={s_room.roomImage} />                           
                                                                        </div>
                                                                        <Card.Body>
                                                                            <Card.Title className="mb-2">{s_room.roomName}</Card.Title>
                                                                            <Card.Text> {s_room.roonDescription} </Card.Text>
                                                                        </Card.Body>               
                                                                    </Card>
                                                                </div>
                                                            )
                                                        })    
                                                    }      
                                                </div>                          
                                            </div> 
                                            )
                                        })
                                    } 
                                </div>
                            </div>
                        </div>
                        
                        <div className={(this.state.w_room.id)?"selected-withroom-content mt-3" : 'dn'}>
                            <div className='small-custom-roomcard-body' onClick={this.removeWithRoom}>
                                <Card className="room-card small-card resize-wh">
                                    <div className="img-body">
                                        <Card.Img variant="top" src={this.state.w_room.roomImage} />                           
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="mb-2">{this.state.w_room.roomName}</Card.Title>
                                        <Card.Text> {this.state.w_room.roonDescription} </Card.Text>
                                    </Card.Body>               
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step-modal-button-wrapper" style={{margin:"60px 0px 32px"}}>
                    <Route render={({ history}) => (                        
                        (
                           (this.state.active !== "inite")?
                            <Button className="g-back bunHover" onClick={() => { 
                                $('.bright-fillter').addClass('dn');
                                history.push({
                                    pathname : '/promoteRoom',
                                    state : this.state.s_friends 
                                }); 
                            }}>Enter</Button>

                            :    

                            <Button className="g-back bunHover" style={{pointerEvents:'none'}} >Enter</Button>
                        )
                    )} />
                    <Button className="t-back bugHover">Cancel</Button>
                </div>
            </div>
        )
    }

    Settings4(){
        return(
            <div className="step-modal withfriend">
                <div className="justifyBeetween" style={{padding:'0 30px', columnGap:'30px'}}>
                    <div className="modal-logo-card">
                        <div className="game-setting-card">
                            <div className="setting-card-img-wrapper">
                                <img src={settings[3].url} alt=""></img>
                            </div>
                            <h4>{settings[3].name}</h4>
                        </div>
                    </div>
                    <div className="battle-request-data-container">
                        <div className="battle-request-data">
                            <RequestData  />
                        </div>
                    </div> 
                </div>
                <div className="step-modal-button-wrapper" style={{columnGap:'25px', padding:'0 60px 40px'}}>
                    <Button className="t-back bugHover">PROMOTE</Button>
                    <Button className="g-back bunHover" onClick={()=>this.enterHandeler(4)}>SEND BATTLE REQUEST</Button>                  
                    <Button className="t-back bugHover">CANCEL</Button>
                </div>
            </div>
        )
    }

    Settings5(){        
        return(
            <div className="step-modal request-battle">
                <h3 style={{color:'#4E5165',padding:'0 69px 56px',textAlign:"center"}}>Wait for Room Owner to confirm the request</h3>
            </div>
        );
        
    }

    
    render() {
        return (
            <div className={(this.state.arrname === 'Play Setting')?"play-pre-modal select-play-game":'play-pre-modal'} >
                <h2 style={{color:'#ff8300', marginBottom:"27px", textAlign:"center"}}>
                    {this.state.arrname}
                </h2> 
                <div className="play-setting-content">
                    {this.state.arrname === 'Play Setting' && this.Settings()}
                    {this.state.arrname === "Gloabal Playing" && this.Settings1()}
                    {this.state.arrname === "Play with Friends" && this.Settings2()}
                    {this.state.arrname === "Play with Room Friends" && this.Settings3()}
                    {this.state.arrname === "Inter Room Battle" && this.Settings4()}
                    {this.state.arrname === "Battle Request Sent" && this.Settings5()}
                </div>
                <div className={(this.state.arrname === "Battle Request Sent")?'dn':"pos-ab g-back bunHover modal-close-btn"}  onClick={this.closeModal}><CloseIcon/></div> 
            </div>
        )
    }
}

export default playgamepre
