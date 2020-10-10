import React, { Component } from 'react'
import ProductTumbs from './tumb'
import { Button } from '@material-ui/core';


export class media extends Component {
    constructor(props){
        super(props);
        this.state = {
            p_preview:this.props.de_Meida.backImg
        };

        this.changeImg = this.changeImg.bind(this)        
    }

    changeImg = (url) =>{
        // console.log(url);
        this.setState({p_preview:url})
    }

    render() {        
        return (
            <div className="media-body">
                <div className="justifyCenter">
                    <div className="product-preview-img-wrapper">
                        <img src={this.state.p_preview} alt=''></img>
                    </div>
                </div>
                
                <div className="product-tumb-wrapper tumbs">
                    <ProductTumbs tumbs={this.props.de_Meida.detailImg} changeImg={this.changeImg}/>
                </div>

                <div className='buy-action-btn-wrapper'>
                    <div className="seller-btns justifyCenter">
                        <Button className='t-back bugHover mr-2'>MESSAGE SELLER</Button>
                        <Button className='t-back bugHover ml-2'>ADD TO FAVORITES</Button>
                    </div>
                    <div className="p-buy-btn justify-align-center">
                        <Button className='g-back bunHover'>BUY ITEM</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default media
