import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import $ from "jquery"
import PlayPremodal from './gamesetting'

export class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            gallery:"../../assets/gameImg/g1.jpg",
            g_review:[1,2,3],  
            showmodal:false,       
        };

        this.reviewHandler = this.reviewHandler.bind(this);
        this.playgameHandler = this.playgameHandler.bind(this);
    }
   
    handerGallary = (e) =>{        
        let elmImg = e.target.src
        let elmId = e.target.id
       
        $('.ga-img').addClass('ga-img-animation')
        $('.thumImg').removeClass('thumImg-active')
        $("#"+elmId).addClass('thumImg-active')
        setTimeout(
            function() {
                this.setState({gallery: elmImg})
                $('.ga-img').removeClass('ga-img-animation')
            }
            .bind(this),
            100
        );
        
    }

    reviewHandler(r){
        let starId = r.target.id
        $("#"+starId).toggleClass('new-review-star-checked')
    }

    playgameHandler(){
        // console.log("playgamebutton clicked");  
        this.setState({showmodal:true})
        $('.bright-fillter').removeClass('dn');
    }

    modalClose = (tex) => {
        if(tex !== ""){
            this.setState({showmodal: false});
            this.props.modalClosed('home');  
        }
    }

    render() {
        return (
            <div className="call-of-duty-pre-content-body">
                <div className="precontent-row justifyCenter">
                    <div className="pre-game-back">
                        <img src={'../../assets/gameImg/callofdutyback.png'} alt=""></img>                        
                    </div>
                </div>
                <div className="precontent-row mt-4">
                    <div className="justify-align-center">
                        <h1>Call Of Duty Mobile Arena</h1>
                        <h4>Garena Mobile Private</h4>
                        <div className="t-g-review-wrapper">
                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                            <StarIcon style={{fontSize:'24px'}} className=""></StarIcon>
                            <StarIcon style={{fontSize:'24px'}} className=""></StarIcon>
                            <span>52 Reviews</span>
                        </div>
                    </div>
                    <div className="justifyCenter g-button-wrraper mt-3" style={{columnGap:"65px"}}>
                        <Button className="g-card-play-btn g-back bunHover" style={{width:"339px", height:"73px"}} onClick={this.playgameHandler}>Play Now</Button>
                        <Button className="g-card-play-btn g-back bunHover" style={{width:"339px", height:"73px"}}>Share</Button>
                    </div>
                    <div className="pl-5 pr-5 pt-3">
                        <h6 style={{fontSize:"26px", textAlign:"justify"}}>Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space </h6>
                    </div>
                </div>
                <div className="precontent-row">
                    <div className="precontent-gallay">
                        <img src={this.state.gallery} className="ga-img" alt=""></img>
                    </div>
                    <div className="precontent-thumbnails">
                        <div className="precontent-thumbnailImage" >
                            <img src={'../../assets/gameImg/g1.jpg'} className="thumImg thumImg-active" id="tu1" alt="" onClick={this.handerGallary} ></img>
                        </div>
                        <div className="precontent-thumbnailImage">
                            <img src={'../../assets/gameImg/g2.jpg'}  className="thumImg" id="tu2" alt="" onClick={this.handerGallary} ></img>
                        </div>
                        <div className="precontent-thumbnailImage">
                            <img src={'../../assets/gameImg/g3.jpg'}  className="thumImg" id="tu3" alt="" onClick={this.handerGallary} ></img>
                        </div>
                        <div className="precontent-thumbnailImage">
                            <img src={'../../assets/gameImg/g4.jpg'}  className="thumImg" id="tu4" alt="" onClick={this.handerGallary} ></img>
                        </div>
                    </div>
                </div>
                <div className="precontent-row mt-5">
                    <div className="comment-review-title">
                        <h3>COMMENTS & REVIEWS</h3>
                    </div>

                    {
                        this.state.g_review.map((review,ij)=>{
                            return(
                                <div className="comment-review-content" key={ij}>
                                    <div className="review-owner-img">
                                        <img src={'../../assets/profile/avata8.png'} alt="" style={{width:"54px", height:'54px', borderRadius:'100px'}}></img>
                                    </div>  
                                    <div className="user-review-wrapper" style={{borderBottom:'2px solid #4E5165'}}>
                                        <h6 style={{color:'#707070',width:'50%',display:'flex', justifyContent:'space-between'}}>Robot Williams <span style={{fontSize:'13px'}}>Aug 15,2020</span></h6>
                                        <div className="t-g-review-wrapper">
                                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                                            <StarIcon style={{fontSize:'24px'}} className="checkedStar"></StarIcon>
                                        </div>
                                        <p style={{marginTop:'20px', marginBottom:'20px'}}>I really enjoy this game, love the graphics and the gameplay. 5 Star for awesomeness!!!</p>
                                        <div className="g-item-header pos-re mb-2">
                                            <h4>
                                                <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}><span role="img" aria-label="Snowman">&#10084;</span> 6</div>
                                                <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}><span role="img" aria-label="Snowman">&#x1F919;</span> 6</div>
                                                <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}>Reply</div>
                                            </h4>
                                            <div className="col-12 p-0 pos-ab" style={{bottom:"53%"}}>
                                                <div className="middle-line"></div>
                                            </div>
                                        </div>
                                        <div className="other-user-review">
                                            <div className="review-owner-img">
                                                <img src={'../../assets/profile/avata5.png'} alt="" style={{width:"54px", height:'54px', borderRadius:'100px'}}></img>
                                            </div> 
                                            <div className="user-review-wrapper">
                                                <h6 style={{color:'#707070', width:'90%',display:'flex', justifyContent:'space-between'}}>Garena Mobile Private <span style={{fontSize:'13px'}}>Aug 15,2020</span></h6>
                                                <p style={{marginTop:'10px', marginBottom:'10px'}}>Thanks for loving our game, please check our other games also!</p>
                                                <div>
                                                    <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}><span role="img" aria-label="Snowman">&#10084;</span> 6</div>
                                                    <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}><span role="img" aria-label="Snowman">&#x1F919;</span> 6</div>
                                                    <div className="padding-arrond" style={{fontSize:'12px', color:'#666A85'}}>Reply</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                      
                                </div>
                            )
                        })
                    }

                    <div className="new-review-star-wrapper">
                        <div className='new-review-star-icon' id="star1" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star2" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star3" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star4" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star5" onClick={this.reviewHandler}></div>
                    </div>

                    <div className="send-new-review">
                        <textarea id="message" placeholder="Send a feedback..." required="" minLength="1" maxLength="1500"/>
                    </div>
                </div>

                <div id="play-game-pre-modal">
                    {this.state.showmodal ?
                        <PlayPremodal history={this.props.history} modalclose={this.modalClose} /> :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default index
