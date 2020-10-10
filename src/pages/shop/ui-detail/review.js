import React, { Component } from 'react'
import StarIcon from '@material-ui/icons/Star';
import $ from "jquery"

export class review extends Component {
    constructor(props){
        super(props);
        this.state = {
            g_review:[1,2,3,4], 
        };

        this.reviewHandler = this.reviewHandler.bind(this);
    }

    reviewHandler(r){
        let starId = r.target.id
        $("#"+starId).toggleClass('new-review-star-checked')
    }
    render() {
        return (
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
                                        <p style={{marginTop:'20px', marginBottom:'20px'}}>I love this seller, very responsive and customer service is exceptional, will recommend!</p>
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
                                                <h6 style={{color:'#707070', width:'90%',display:'flex', justifyContent:'space-between'}}>Jone Done <span style={{fontSize:'13px'}}>Aug 15,2020</span></h6>
                                                <p style={{marginTop:'10px', marginBottom:'10px'}}>Thanks for the nice review, it was a smooth transactions</p>
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

                    <div className="new-review-star-wrapper" style={{marginLeft:'43px'}}>
                        <div className='new-review-star-icon' id="star1" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star2" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star3" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star4" onClick={this.reviewHandler}></div>
                        <div className='new-review-star-icon' id="star5" onClick={this.reviewHandler}></div>
                    </div>

                    <div className="send-new-review" style={{margin:"18px 120px 10px 195px"}}>
                        <textarea id="message" placeholder="Send a feedback..." required="" minLength="1" maxLength="1500"/>
                    </div>
                </div>
        )
    }
}

export default review
