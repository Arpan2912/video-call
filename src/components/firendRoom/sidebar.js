import React, { Component } from 'react';
import '../../css/friend.css';
import SearchBox from '../build/ui-search';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import FriendList from './friendList'
import $ from "jquery"


export class sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {
            leftSidebarState: true,  
            sendleftState:""           
        };
        this.handleLeftSidebar = this.handleLeftSidebar.bind(this);
        this.ch = this.ch.bind(this);

    }

    componentDidMount(){
        this.setState({sendleftState:this.state.leftSidebarState})
        // console.log(this.state.sendleftState);
    }

  

    handleLeftSidebar(){
        var leftsidebar = document.getElementById("fr-sidebar");    
        var friendcontainer = document.getElementsByClassName('friendcontainer')[0];     
        this.setState({leftSidebarState: !this.state.leftSidebarState}, () => {
            if(!this.state.leftSidebarState){
                leftsidebar.style.width = "100px";
                leftsidebar.style.background = "transparent";
                friendcontainer.style.marginLeft = "100px";
                $('.fr-list-body').addClass('rs-fr-list-body');                
            }
            else{
                leftsidebar.style.width = "320px";
                leftsidebar.style.background = "#2C2F44";
                friendcontainer.style.marginLeft = "332px";
                $('.fr-list-body').removeClass('rs-fr-list-body');                
            }
        })
    }

    ch(f_key_num){        
        this.props.cha(f_key_num);
    }

    render() {
        const{
            leftSidebarState
        } = this.state
        return (
            <div className="f-side-body" id="fr-sidebar">
                <div className="f-side-header pos-re">
                    <div className={(this.state.leftSidebarState)?"fr-search-wrapper":'rs-fr-search-wrapper'}>
                        <SearchBox/>
                    </div>
                    <div className={(this.state.leftSidebarState)?"so-icon-wrapper mb-3":"rs-so-icon-wrapper" }>
                        <div className="s-d-icon"></div>
                        <div className="s-m-icon"></div>
                        <div className="s-p-icon"></div>
                    </div>                    
                    <button className={(leftSidebarState)?"size-reduce-btn":"size-reduce-btn rs-size-reduce-btn"} onClick={this.handleLeftSidebar}>
                        {(leftSidebarState) ? (
                            <ArrowBackIosRoundedIcon className="arrow-back-icon"/>
                            ):(
                            <MenuRoundedIcon className="arrow-back-icon"/>
                            )}
                    </button>
                </div>
                <FriendList ch={this.ch} />

            </div>
        )
    }
}

export default sidebar
