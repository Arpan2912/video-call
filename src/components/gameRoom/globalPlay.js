import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import '../../css/play-game.css'
import {Route} from 'react-router-dom';
import $ from "jquery"


const teamA = [
    {
        id: 1,
        url: '../../assets/profile/img_avatar 1.png',
        name:'you'
    },

    {
        id: 2,
        url: '../../assets/profile/avata7.png',
        name:'Joseph Perry'
    },

    {
        id: 3,
        url: '../../assets/profile/avata8.png',
        name:'Robert Willams'
    },

    {
        id: 4,
        url: '../../assets/profile/avata9.png',
        name:'Imelda Hopkins'
    },
    {
        id: 5,
        url: '../../assets/profile/avata10.png',
        name:'Phil Morris'
    }
];

const teamB = [
    {
        id: 1,
        url: '../../assets/profile/avata1.png',
        name:'Sachiko'
    },

    {
        id: 2,
        url: '../../assets/profile/avata2.png',
        name:'Joseph Perry'
    },

    {
        id: 3,
        url: '../../assets/profile/avata3.png',
        name:'Robert Willams'
    },

    {
        id: 4,
        url: '../../assets/profile/avata4.png',
        name:'Imelda Hopkins'
    },
    {
        id: 5,
        url: '../../assets/profile/avata5.png',
        name:'Phil Morris'
    }
];

export class globalPlay extends Component {
    constructor(props){
        super(props);
        this.state={
            preloader:false, 
            
            
        }
    }

    

    componentDidMount(){
        setTimeout(
            () => { 
                this.setState({ preloader:true }) 
                $('.global-play-game-content').addClass('pageFade')
            },
        3000
        );

        setTimeout(
            () => { 
                $('.global-play-game-content').removeClass('pageFade')
            },
        5000
        );
    }

    render() {
        return (
            <>
            <div className={(this.state.preloader)?'dn':'gamepage-pre-loader pos-ab'}>
                <div style={{transform:'translate(-34%, -50%)'}}>
                    <div className="center-circle" style={{top:'21%',left:'34%', width:'120px',height:'120px'}}></div>
                    <div className="search-animation">
                        <img src={"../../assets/icons/skip-preloader.svg"} alt="" style={{width:"150px", height:"150px"}}/>
                    </div>  
                    <p className="loadingtext">Connecting</p>
                </div>                        
            </div>
            
            <div className="global-play-game-content">                
                <div className="play-game-headercard">
                    <h4 className="headercard-title-text">friends battle</h4>
                </div>
                <div className="global-play-content">
                    <div className="page-back-img-wrapper">
                        <img src={'../../assets/gameImg/gamebacks/callofduty.webp'} alt=''></img>
                    </div>
                    <div className="team-users-wrapper">
                        <div className="team-wrapper left-section">
                            <h5 className='team-section-title'>Team B</h5>
                            <div className="selected-team-users-wrapper" >
                                { 
                                    teamB.map((team,i)=>{
                                        return (
                                        <div className="team-users" key={i}>
                                            <div className="team-user-img-wrapper">
                                                <img  src={team.url} alt="" style={{width:'100%', height:"100%"}}></img>
                                            </div>
                                            <p className='team-user-name'>{team.name}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="horizontal-center">

                            <Route render={({ history}) => (
                                <Button  className="t-back bugHover spanwhite" style={{width:"153px", height:'53px', borderRadius:'100px', outline:'none'}} 
                                    onClick={() => {
                                        history.push('/dashboard/games')
                                        $('.exit-game-cover').css('display','flex')
                                        setTimeout(
                                            () => { 
                                                $('.exit-game-cover').css('display','none')
                                            },
                                        2800
                                    );
                                    
                                }}>exit game</Button>
                            )} />
                        </div>
                        <div className="team-wrapper right-section">
                            <h5 className='team-section-title'>Team A</h5>
                            <div className="selected-team-users-wrapper" >
                                { 
                                    teamA.map((team,i)=>{
                                        return (
                                        <div className="team-users" key={i}>
                                            <div className="team-user-img-wrapper">
                                                <img  src={team.url} alt="" style={{width:'100%', height:"100%"}}></img>
                                            </div>
                                            <p className='team-user-name'>{team.name}</p>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>                        
                    </div>
                </div>                
            </div>

            
            </>
        )
    }
}

export default globalPlay
