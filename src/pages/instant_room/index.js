import React, { Component } from 'react'
import '../../css/room.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { GradiantButton } from '../../components/styles'
export class index extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }
    componentDidMount(){
        this.props.handleLinkActive('instantRoomState');
    }

    routeChange(){
        let path = `/dashboard/room-setup`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="instant-room-container">
                <div className="search-bar-container">
                    <p className="gray-color font-20 text-uppercase mb-0 font-weight-bold">instant room</p>
                    <div className="search-input-container">
                        <SearchRoundedIcon className="search-icon"/>
                        <input type="text" className="search-textbox" placeholder="Search..." />
                    </div>
                </div>
                <div style={{paddingTop: "111px"}}>
                    <p className="da-title-color font-33 text-center font-weight-bold">BROADCAST INSTANTLY WITH INSTANT ROOM</p>
                    <div className="instant-room-rectangle-container">
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/icon-link.png"} alt='' />
                            <p className="da-title-color font-30 text-center mb-0">invite with a link</p>
                        </div>
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/icon-account.png"} alt='' />
                            <p className="da-title-color font-30 text-center mb-0">no account needed to join</p>
                        </div>
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/icon-device.png"} alt='' />
                            <p className="da-title-color font-30 text-center mb-0">use any device</p>
                        </div>
                    </div>
                    <div className="justify-align-center" style={{paddingTop: "80px"}}>
                        <GradiantButton width="520px" height="80px" value="create now" onClick={this.routeChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
