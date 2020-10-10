import React, { Component } from 'react'
import '../../css/play-game.css'
import {Route} from 'react-router-dom';
import { Button } from '@material-ui/core';

import $ from "jquery"
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
        url: '../../assets/profile/avata6.png',
        name:'Phil Morris'
    }
];


export class friendsGame extends Component {

    constructor(props){
        super(props);
        this.state={
            preloader:false,  
            teamA:this.props.teamData,
            a_step1:true,       
            a_step2:false,       
            a_step3:false, 
        }

    }

   

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({preloader: true})                
            }
            .bind(this),
            2000
        );

        setTimeout(
            function() {
                this.setState({a_step2: true})                
            }
            .bind(this),
            6000
        );

        setTimeout(
            function() {
                this.setState({a_step3: true})                
            }
            .bind(this),
            12200
        );

        
    }

    render() {
        return (
            <>
            <div className={(this.state.preloader)?'dn':'inside-gamepage-pre-loader pos-ab'}>
                <div style={{transform:'translate(-17%, -18%)'}}>
                    <div className="center-circle" style={{top:'21%',left:'34%', width:'120px',height:'120px'}}></div>
                    <div className="search-animation">
                        <img src={"../../assets/icons/skip-preloader.svg"} alt="" style={{width:"150px", height:"150px"}}/>
                    </div>  
                    <p className="loadingtext">Connecting</p>
                </div>                        
            </div>

            <div className={(this.state.preloader)?'fr-glabal-Game':'dn'}> 
                <div className="global-play-content" style={{ marginLeft:'40px' }}>
                    <div className="page-back-img-wrapper">
                        <img src={'../../assets/gameImg/gamebacks/callofduty.webp'} alt='' style={{width:'100%'}}></img>
                    </div>
                    <div className={(this.state.a_step2)?"team-users-wrapper":'team-users-wrapper justifyCenter'}>
                        {(this.state.a_step2)&&
                            <div className="team-wrapper left-section">
                            <h5 className='team-section-title'>Team B</h5>
                            <div className="selected-team-users-wrapper" >
                                { 
                                    teamB.map((team,i)=>{
                                        return (
                                        <div className={'team-users tub' + (i+1) }key={i}>
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
                        }
                       
                        {(this.state.a_step3)&&
                            <div className="horizontal-center">

                            <Route render={({ history}) => (
                                <Button  className="t-back bugHover spanwhite bottomFadeBun" style={{width:"153px", height:'53px', borderRadius:'100px', outline:'none'}} 
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
                        }

                        
                        <div className="team-wrapper right-section">
                            {(this.state.a_step2)&&<h5 className='team-section-title'>Team A</h5>}
                            <div className="selected-team-users-wrapper" >
                                <div className="team-users">
                                    <div className="team-user-img-wrapper">
                                        <img className="tu" src={'../../assets/profile/img_avatar 1.png'} alt="" style={{width:'100%', height:"100%"}}></img>
                                    </div>
                                    <p className='team-user-name'>You</p>
                                </div>
                                { 
                                    this.state.teamA.map((team,i)=>{
                                        return (
                                        <div className="team-users" key={i}>
                                            <div className="team-user-img-wrapper">
                                                <img className={'tu tua' + (i+1)} src={team.face} alt="" style={{width:'100%', height:"100%"}}></img>
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

export default friendsGame
