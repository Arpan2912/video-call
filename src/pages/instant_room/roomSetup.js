import React, { Component } from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { FormInput, GradiantButton, TransparentButton, P } from '../../components/styles'
import Checkbox from '@material-ui/core/Checkbox';

export class roomSetup extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount(){
        this.props.handleLinkActive('instantRoomState');
    }

    routeChange(){
        let path = `/instant-room`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="room-setup-container">
                <div className="search-bar-container">
                    <p className="gray-color font-20 text-uppercase mb-0 font-weight-bold">Home</p>
                    <div className="search-input-container">
                        <SearchRoundedIcon className="search-icon"/>
                        <input type="text" className="search-textbox" placeholder="Search..." />
                    </div>
                </div>
                <div style={{paddingTop: "180px"}} className="justify-align-center">
                    <div className="room-setup-form-conatiner">
                        <P fontSize="29px" color="#FF8300" fontWeight="bold">Instant Room Setup</P>
                        <FormInput width="607px" height="60px" fontSize="20px" paddingLeft="25px" placeholder="Live Broadcast Name"/>
                        <FormInput width="607px" height="60px" fontSize="20px" paddingLeft="25px" placeholder="User Limit"/>
                        <div className="horizontal-center">
                            <Checkbox className="checkbox" size="medium"/>
                            <P fontSize="18px">Anyone with the link can join</P>
                        </div>
                        <div>
                            <GradiantButton onClick={this.routeChange} width="200px" height="60px" fontSize="16px" value="broadcast now" style={{marginRight: "30px"}}/>
                            <TransparentButton width="200px" height="60px" fontSize="16px" value="cancel" style={{marginLeft: "30px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default roomSetup
