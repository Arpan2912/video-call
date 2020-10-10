import React, { Component } from 'react'
import userData from '../../data/userData.json';
import $ from "jquery"


export class roomGame extends Component {
    constructor(props){
        super(props);
        this.state={
          users:userData[0].friends,
          preloader:false,  
          teamA:[],
          teamB:[],
          step1:false,
          step2:false,
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({preloader: true})                
            }
            .bind(this),
            5000
        );

        setTimeout(
            function() {
                this.inputTeamAuser();
            }
            .bind(this),
            6000
        )

        setTimeout(
            function() {
                this.inputTeamBuser();
            }
            .bind(this),
            15000
        )
    }

    componentDidUpdate(){
        // console.log($('.or-users-iii').length);
        let len = $('.or-users-iii').length;
        let aw=$('.p_users-original-wrapper').width();
        let ah=$('.p_users-original-wrapper').height();
        let awh = aw*ah
        let w = Math.sqrt(awh/len);
        // console.log(w);
        
        if(len <= 18){
            if((len/6)!==0 ){
                $(".or-users-iii").width("16.6%");
                $(".or-users-iii").css("padding",'7px');            
            }else if( (len/5)!==0 ){
                $(".or-users-iii").width("20%"); 
                $(".or-users-iii").css("padding",'10px'); 
            }
        }else{
            $(".or-users-iii").width(w); 
            $('.or-users-iii').height(w); 
            $(".or-users-iii").css("padding",w%5); 
        }

    }

    inputTeamAuser(){
        this.setState({step1:true})
        let ttt = setInterval(() => {    
            let arr = this.state.users;            
            let len = arr.length;
            var ran = arr.splice(Math.floor(Math.random() * len - 1),1);
            let arr2 = this.state.teamA.concat(ran); 
            this.setState({teamA:arr2})
            console.log(this.state.teamA);
            if(arr2.length > 4){
                clearInterval(ttt);
            }
        }, 1500);
    }

    inputTeamBuser(){
        this.setState({step2:true})
        let tt = setInterval(() => {    
            let arr = this.state.users;            
            let len = arr.length;
            var ran = arr.splice(Math.floor(Math.random() * len - 1),1);
            let arr2 = this.state.teamB.concat(ran); 
            this.setState({teamB:arr2})
            console.log(this.state.teamB);
            if(arr2.length > 4){
                clearInterval(tt);
            }
        }, 1500);
    }

    render() {
        return (
            <>
            <div className={(this.state.preloader)?'dn':'inside-promote-pre-loader pos-ab'}>
                <div style={{transform:'translate(-17%, -18%)'}}>
                    <div className="center-circle" style={{top:'21%',left:'34%', width:'120px',height:'120px'}}></div>
                    <div className="search-animation">
                        <img src={"../../assets/icons/skip-preloader.svg"} alt="" style={{width:"150px", height:"150px"}}/>
                    </div>  
                    <p className="loadingtext">Connecting</p>
                </div>                        
            </div>
            <div className={(this.state.preloader)?"room-game-body":'dn'}>
                {(this.state.step2)&&
                    <div className="selected-users-wrapper">
                    {
                        this.state.teamB.map((b_team,k)=>{
                            return(
                                <div className="selected-team-user" key={k}>
                                    <div className="own-img-wrapper">                     
                                        <img src={b_team.profile} alt="userface" style={{width:"100%", height:"100%"}}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                }
                <div className="p_users-original-wrapper">
                    <div className="or-users-wrapper">
                        { 
                            this.state.users.map((user,i)=>{
                                return (
                                <div className="or-users-iii" key={i}> 
                                    <div className="own-img-wrapper">                     
                                        <img src={user.profile} alt="userface" style={{width:"100%", height:"100%"}}/>
                                    </div>
                                </div>
                                )
                            })
                        }   
                    </div>
                    <div className="game-roomplay-back">
                        <img src={"../../assets/gameImg/gamebacks/callofduty.webp"} alt="" style={{width:"100%", height:"100%"}}></img>
                    </div>
                </div>

                
                {(this.state.step1)&& 
                    <div className="selected-users-wrapper">
                    {
                        this.state.teamA.map((a_team,k)=>{
                            return(
                                <div className="selected-team-user" key={k}>
                                    <div className="own-img-wrapper">                     
                                        <img src={a_team.profile} alt="userface" style={{width:"100%", height:"100%"}}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                }

            </div>
            </>
        )
    }
}

export default roomGame
