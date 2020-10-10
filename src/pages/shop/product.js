import React, { Component,useMemo } from 'react'
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';




export class product extends Component {
    constructor(props){
        super(props);
        this.divRef = React.createRef();
        this.state={
        products:[],
        }
    }

    componentDidMount(){
        this.setState({products:this.props.productsList})
    }

    detailView(category_id,item_id) {
        
        this.props.getDetailProductData(
          {
            detailViewProduct: {
              category_id,
              item_id,   //send detail data to index
            }            
          }
        );
    }

    render() {
        return (
            <>
            
            {
                this.state.products.map((product,ij)=>{
                    return(
                        <div className="g-item-wrapper" key={ij}>
                            <div className="g-item-header pos-re" style={{width:'100%'}}>
                                <h4 className='mt-1 mb-3'>{product.listTitle}</h4>
                                <div className="col-12 p-0 pos-ab" style={{bottom:"53%"}}>
                                    <div className="middle-line"></div>
                                </div>
                            </div>
                            <div className="g-card-wrapper" style={{rowGap:'20px'}}>                                
                                {
                                    product.productsList.map((p_list,j)=>{
                                        let menuItems = [];

                                        for (var i = 0; i <p_list["star"]; i++) {
                                            menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                                        }

                                        for (var k = 0; k <5-p_list["star"]; k++) {
                                            menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                                        }
                                        return(
                                            <div className={(this.props.ls === true)?"shop-card market-resize pos-re market-left-active":"shop-card market-resize pos-re"} key={j} >
                                                <div ref={this.divRef}
                                                    onClick={this.detailView.bind(
                                                    this,
                                                    ij,
                                                    j, )}
                                                >
                                                    <div className="sh-card-back w-100">
                                                        <img src={p_list.backImg} alt="product-face" style={{width:'100%', height:"100%"}}></img>
                                                    </div>
                                                    <div className="sh-card-body" style={{textAlign:'center'}} >
                                                        <p>{p_list.name}</p> 
                                                        <span>$<span>{p_list.cost}</span>&nbsp;USD</span>   
                                                        <div className="review-star-wrapper">
                                                            {menuItems}
                                                            <span>&nbsp;<span>{p_list.review}</span>Reviews</span>
                                                        </div>                        
                                                    </div>
                                                </div> 
                                                <IconButton aria-label="share" className="share-action-icon g-back">
                                                    <ShareIcon />
                                                </IconButton>                          
                                            </div>
                                        )
                                    })
                                }
                            </div> 
                        </div>
                    )

                })
            }
            <div className="offerProducts">
                <div className="offer-bannerimg-wrraper">
                    <img src={this.props.offerProducts.bannerImg} alt=""></img>
                </div>
                <h3>{this.props.offerProducts.offertitle}</h3> 
                <div className="g-card-wrapper" style={{rowGap:'20px'}}>
                    {
                        this.props.offerProducts.products.map((p_list,j)=>{
                            let menuItems = [];

                            for (var i = 0; i <p_list["star"]; i++) {
                                menuItems.push( <StarIcon key={i} style={{fontSize:'18px'}} className="checkedStar"></StarIcon> );
                            }

                            for (var k = 0; k <5-p_list["star"]; k++) {
                                menuItems.push( <StarIcon key={i+k} style={{fontSize:'18px'}}></StarIcon> );
                            }
                            return(
                                <div className={(this.props.ls === true)?"shop-card market-resize pos-re market-left-active":"shop-card market-resize pos-re"} key={j} >
                                    <div>
                                        <div className="sh-card-back w-100">
                                            <img src={p_list.image} alt="product-face" style={{width:'100%'}}></img>
                                        </div>
                                        <div className="sh-card-body" style={{textAlign:'center'}} >
                                            <p>{p_list.name}</p> 
                                            <span>$<span>{p_list.cost}</span>&nbsp;USD</span>   
                                            <div className="review-star-wrapper">
                                                {menuItems}
                                                <span>&nbsp;<span>{p_list.review}</span>Reviews</span>
                                            </div>                        
                                        </div>
                                    </div> 
                                    <IconButton aria-label="share" className="share-action-icon g-back">
                                        <ShareIcon />
                                    </IconButton>                          
                                </div>
                            )
                        })
                    }
                </div> 
                <div className="product-loadmore-btn">
                    <Button className="g-back bunHover">Load More</Button>
                </div> 
            </div>
            </>
        )
    }
}

export default product
