import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import GameHome from '../build/gameContents/home/game-home'
import TopGame from '../build/gameContents/top/index'
import NewRelase from '../build/gameContents/newlease/index'
import Favorite from '../build/gameContents/favorite/index'
import PreGame from '../build/gameContents/pregame/index'

import $ from "jquery"



export class gamecontent extends Component {
    constructor(props){
        super(props);
        this.state = {
            homefirst:true,
            home:false,
            top:false,
            newrelease: false,
            favorite: false,
            pregame:false,
        };
        this.handleLinkActive = this.handleLinkActive.bind(this);
        this.pregame_b = this.pregame_b.bind(this);
    }  
    
    componentDidMount(){
        
    }

    handleLinkActive(txt){
        // console.log(txt);       
        this.setState({
            home:false,
            homefirst:false,
            top:false,
            newrelease: false,
            favorite: false,
            pregame:false,
        });
        this.setState({[txt]: true});
    }

    

    pregame_b = (txt) =>{        
        console.log(txt);
        $('.flag3').addClass("secondrun-home");
        setTimeout(
            function() {
                $('.flag3').removeClass("secondrun-home");
                this.setState({
                    home:false,
                    homefirst:false,
                    top:false,
                    newrelease: false,
                    favorite: false,
                    pregame:false,
                });
                this.setState({pregame: true});
            }
            .bind(this),
            800
        );
       
    }

    handleRoute = (cometext) => {
        if (cometext !== ''){
            console.log(cometext);       
        this.setState({
            home:false,
            homefirst:false,
            top:false,
            newrelease: false,
            favorite: false,
            pregame:false,
        });
        this.setState({[cometext]: true});
        }
    }


    render() {
        const{
            home,
            homefirst,
            top,
            newrelease,
            favorite,
            pregame,
          } = this.state;
        return (
            <div style={{display:'flex', flex:"auto", flexDirection:'column'}}>
                <div className='row g-content-header'>
                    <div className="col-12 g-header-tab">                        
                        <Button className={(this.state.home)||(this.state.homefirst)? "g-nav-active fg": "fg"} onClick={()=>this.handleLinkActive('home')}>Home</Button>
                        <Button className={(this.state.top)? "g-nav-active": ""} onClick={()=>this.handleLinkActive('top')}>Top Charts</Button>
                        <Button className={(this.state.newrelease)? "g-nav-active": ""} onClick={()=>this.handleLinkActive('newrelease')}>New Release</Button>
                        <Button className={(this.state.favorite)? "g-nav-active": ""} onClick={()=>this.handleLinkActive('favorite')}>Favorites</Button>
                    </div>
                </div>
                <div className='row g-content-body'>
                    {homefirst && (<GameHome fr={this.state.homefirst} pregameB={this.pregame_b}/>)} 
                    {home && (<GameHome fr={this.state.homefirst}  pregameB={this.pregame_b}/>)} 
                    {top && (<TopGame/>)}    
                    {newrelease && (<NewRelase/>)}    
                    {favorite && (<Favorite/>)} 
                    {pregame && (<PreGame modalClosed={this.handleRoute} />)} 
                </div>
            </div>
        )
    }
}

export default gamecontent
