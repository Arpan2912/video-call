import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SwiperSlide from '../../components/home/customSlider';
import "../../css/home.css";
import {Card} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import roomData from '../../data/promotedRomm.json';
import appData from '../../data/topApp.json';
import $ from "jquery"




export class index extends Component {
    constructor(props){
        super(props);
        this.state={
            roomdata:[],
            appdata:[],
        };
    }
    componentDidMount(){
        this.props.handleLinkActive('homeState');         
        this.setState({roomdata:roomData});
        this.setState({appdata:appData});

        $(".size-reduce-btn").click(function(){
            $(".cover-hidden").toggleClass( 'cover-resize');
        });

        $("#down").click(function(){
            var topPuls=880;
            var cPos=Number($("#left-section").scrollTop());
            $("#left-section").scrollTop(topPuls+cPos);
            // console.log(topPuls+cPos);
        });

        $("#up").click(function(){
           $("#left-section").scrollTop(0);
        });
        $(".size-reduce-btn").click(function(){
            $(".scrollBtnGroup").toggleClass("scrollBtnGroupA");
            $(".resize-wh").toggleClass("resize-whA");
            $(".between-img").toggleClass("resize-whB");
            $(".fix-back").css("width","62%");
            $(".resize-h").toggleClass("resize-hA");
        });
    }

    render() {
        return (
            <div className="page-content home-content row">                
                <div className="top-page-header col-12 position-fixed"> 
                    <Card className="top-card-body">
                        <Card.Title className="mb-0">Home</Card.Title>
                        <div className="search-box">
                            <div className="searchIcon">
                            <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Card>
                </div>
                <div className="col-lg-8 home-side-section" id="left-section" style={{paddingTop:"136px"}}>
                    <div className="position-fixed fix-back"> 
                        <h2 className="content-sub-title">GET NOTICE, PROMOTE YOUR ROOM NOW!</h2>
                    </div>
                    <div className="scrollBtnGroup">                        
                        <div id="up" className="mb-5"></div>
                        <div id="down" className="mt-5"></div>
                    </div>
                    <div className="swiper-slide-body">
                        <div className="cover-hidden ab-left"></div>
                            <SwiperSlide />
                        <div className="cover-hidden ab-right"></div> 
                    </div>
                    <div className="promote-room">
                        <div className="content-sub-title-body">
                            <span className="middle-line"></span>
                            <h4 className="mb-0 content-sub-title" >Promoted Rooms</h4>                            
                        </div>
                        <div className="room-sort"> 
                            {
                                this.state.roomdata.map((room,id)=>{
                                    return(
                                    <Card className="room-card small-card resize-wh" key={id}>
                                        <div className="img-body">
                                            <Card.Img variant="top" src={room.roomImage} />                           
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="mb-2">{room.roomName}</Card.Title>
                                            <Card.Text> {room.roonDescription} </Card.Text>
                                        </Card.Body>  
                                        <div className="card-hover-effect">
                                            <div className="visitRoomBtn">Visit Room</div>
                                        </div>                              
                                    </Card>
                                    )
                                })    
                            } 
                            
                            <div className="between-img">
                                <img src="../../assets/roomImg/PromotoGroup.jpg" alt="" ></img>
                            </div>
                            <Card className="room-card small-card resize-h">
                                <div className="img-body">
                                    <Card.Img variant="top" src="../../assets/roomImg/room-game.jpg" />                           
                                </div>
                                <Card.Body>
                                    <Card.Title className="mb-2">Room Name</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-hover-effect">
                                    <div className="visitRoomBtn">Visit Room</div>
                                </div> 
                            </Card>
                        </div>

                    </div>
                    <div className="promote-room">
                        <div className="content-sub-title-body">
                            <span className="middle-line"></span>
                            <h4 className="mb-0 content-sub-title" >Directories</h4>                            
                        </div>                       
                        <div className="room-sort"> 
                            {
                                this.state.roomdata.map((room,id)=>{
                                    return(
                                    <Card className="room-card small-card resize-wh" key={id}>
                                        <div className="img-body">
                                            <Card.Img variant="top" src={room.roomImage} />                           
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="mb-2">{room.roomName}</Card.Title>
                                            <Card.Text> {room.roonDescription} </Card.Text>
                                        </Card.Body> 
                                        <div className="card-hover-effect">
                                            <div className="visitRoomBtn">Visit Room</div>
                                        </div>                                
                                    </Card>
                                    )
                                })    
                            }                   
                            <Card className="room-card small-card resize-h">
                                <div className="img-body">
                                    <Card.Img variant="top" src="../../assets/roomImg/room-game.jpg" />                           
                                </div>
                                <Card.Body>
                                    <Card.Title className="mb-2">Room Name</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <div className="card-hover-effect">
                                    <div className="visitRoomBtn">Visit Room</div>
                                </div> 
                            </Card>
                            <div className="between-img">
                                <img src="../../assets/roomImg/AroundGroup.jpg" alt="" ></img>
                            </div>
                        </div>
                    </div>

                    <div className="justity-center mb-5 mt-3">
                        <div className="g-back bunHover round-btn home-load-more-btn">Load More</div>
                    </div> 
                </div>
                <div className="col-lg-4 home-side-section" style={{paddingTop:"148px"}}>
                    <div className="right-wiget">
                        <div className="pos-re justity-center">
                            <Card className="room-card big-card">
                                <div className="img-body">
                                    <Card.Img variant="top" src="../../assets/roomImg/big-card.jpg" />                           
                                </div>
                                <Card.Body>
                                    <Card.Title className="mb-2">Room Name</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>                            
                            </Card>
                            <Button  className="pos-ab own-promote-btn" variant="contained">PROMOTE YOUR ROOM</Button>
                        </div>
                        <div className="pos-re justity-center mt-big">
                            <div className="wiget-header justity-center">
                                Trending Rooms
                            </div>
                            <div className="wiget-item-body">
                                {
                                    this.state.roomdata.map((room,j)=>{
                                        return(
                                        <div className="wiget-item mb-3" key={j} >
                                            <img src={room.roomImage} alt="" width="60" height="60px"></img>
                                            <span>{room.roomName}</span>
                                        </div>
                                        )
                                    })    
                                } 
                            </div>
                        </div> 
                        <div className="pos-re justity-center mt-big">
                            <div className="wiget-header justity-center">
                                Top 10 Apps on Phiz
                            </div>
                            <div className="wiget-item-body mb-5">
                                {
                                    this.state.appdata.map((app,i)=>{
                                        return(
                                            <div className="wiget-item mb-3" key={i}>
                                                <img src={app.appImage} alt="" width="60" height="60px"></img>
                                                <span>{app.appName}</span>
                                            </div>
                                        )
                                    })    
                                }
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default index
