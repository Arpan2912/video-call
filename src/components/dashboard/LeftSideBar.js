import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/left-sidebar.css'

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export class LeftSideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftSidebarState: true,
            homeState: false,
            roomState: false,
            friendState: false,
            randomState:false,
            instantRoomState: false,
            appState: false,
            gameState: false,
            shopState: false,
        };
        this.handleLinkActive = this.handleLinkActive.bind(this);
        this.handleLeftSidebar = this.handleLeftSidebar.bind(this);
    }

    handleLinkActive(txt){
        // console.log(txt);
        this.setState({
            homeState: false, 
            roomState: false, 
            friendState: false, 
            randomState:false,
            instantRoomState: false, 
            appState: false, 
            gameState: false,
            shopState: false,
        });
        this.setState({[txt]: true});
    }

    handleLeftSidebar(){  
        this.props.leftStatus(this.state.leftSidebarState);      
        var leftsidebar = document.getElementById("leftSidebar");
        var dashboardMain = document.getElementById('dashboardMain');
        this.setState({leftSidebarState: !this.state.leftSidebarState}, () => {            
            if(!this.state.leftSidebarState){
                // leftsidebar.style.marginLeft = "-100px";
                leftsidebar.style.width = "100px";
                dashboardMain.style.marginLeft = "100px";                
            }
            else{
                leftsidebar.style.width = "244px";
                // if (window.innerWidth > 992) {
                    dashboardMain.style.marginLeft = "244px";
                    // el.classList.remove("g-gallary-wrapper-active");
                // }
                // if (window.innerWidth <= 992) {
                //     document.getElementById("dashboardMask").style.display = "block";
                // }
            }
        })
    }

   


    render() {
        const {
            leftSidebarState,
            homeState,
            roomState,
            friendState,
            randomState,
            instantRoomState,
            appState,
            gameState,
            shopState,
        } = this.state;

        return (
            <div className={(!leftSidebarState)? "dashboard-left-sidebar size-reduce-sidebar": "dashboard-left-sidebar"} id="leftSidebar">
                {/* user avatar */}
                <div className="d-flex flex-column" >
                    <div className="text-center">
                        <img src={"../../assets/profile/img_avatar 1.png"} className="user-avatar round-avatar" alt="user avatar" />
                    </div>
                    <h6 className="text-uppercase text-center gray-color mt-2 mb-0 font-weight-bold">jhone doe</h6>
                    <p className="text-uppercase text-center gold-color" style={{fontSize: "8px"}}>gold user</p>
                </div>

                {/* links */}
                <div className="left-sidebar-items-container">
                    <div className={(homeState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/home'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-home.svg"} alt="home icon" />
                                <span className="gray-color font-16 ml-2">Home</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(roomState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/room'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-room.svg"} alt="room icon" />
                                <span className="gray-color font-16 ml-2">Room</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(friendState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"}>
                        <Link to={'/dashboard/friends'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-friend.svg"} alt="friends icon" />
                                <span className="gray-color font-16 ml-2">Friends</span>
                            </div>
                        </Link>
                    </div>




                    <p className="font-16 da-title-color font-weight-bold pt-4" style={{paddingLeft: "50px"}}>Discover</p>

                    <div className={(randomState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/random-room'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-random.svg"} alt="instant icon" />
                                <span className="gray-color font-16 ml-2">Random</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(instantRoomState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/instant-room'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-instant.svg"} alt="instant icon" />
                                <span className="gray-color font-16 ml-2">Instant Room</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(appState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/apps'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-app.svg"} alt="apps icon" />
                                <span className="gray-color font-16 ml-2">Apps</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(gameState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/games'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-game.svg"} alt="games icon" />
                                <span className="gray-color font-16 ml-2">Games</span>
                            </div>
                        </Link>
                    </div>

                    <div className={(shopState) ? "left-sidebar-item left-sidebar-active":"left-sidebar-item"} >
                        <Link to={'/dashboard/shop'} className="sidebar-item-link link-underline-none">
                            <div className="d-flex">
                                <img src={"../../assets/icons/icon-shop.svg"} alt="shop icon" />
                                <span className="gray-color font-16 ml-2">Market</span>
                            </div>
                        </Link>
                    </div>
                   
                </div>

              
                <button className="size-reduce-btn" onClick={this.handleLeftSidebar}>
                    {(leftSidebarState) ? (
                        <ArrowBackIosRoundedIcon className="arrow-back-icon"/>
                        ):(
                        <MenuRoundedIcon className="arrow-back-icon"/>
                    )}
                </button>
            </div>
        )
    }
}

export default LeftSideBar
