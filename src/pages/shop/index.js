import React, { Component } from 'react'
import '../../css/shop.css'
import Header from "./header";
import Product from './product';
import ProductDetail from './productDetail';
import ProductSide from './productSide'
import FavoriteProducts from './favoriteProducts'
import productData from '../../data/shopData.json';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




export class index extends Component {
    constructor() {
        super();
        this.state = {
            products:productData.products,
            ownProducts:productData.ownProducts,
            offerProducts:productData.offerProducts,
            favorityProducts:productData.favorityProducts,
            productsview:true,
            productDetailView:false,
            favorityView:false,
            p_detail:{},
            p_favorite:{},
            
        }

        this.handleBack = this.handleBack.bind(this);
    };    

    componentDidMount(){
        this.props.handleLinkActive('shopState');
        
    }

    handleChangeState = (comes_data) =>{
        if(comes_data==="favority"){
            this.setState({
                productsview:false,
                productDetailView:false,
                favorityView:true,
            })
        }else{
            this.setState({
                productsview:false,
                favorityView:false,
                productDetailView:true,
            });

            let dc_id = comes_data.detailViewProduct.category_id;
            let dp_id =comes_data.detailViewProduct.item_id;
            let selectedProductData = this.state.products[dc_id].productsList[dp_id]
            // console.log(selectedProductData)
            this.setState({
                p_detail:selectedProductData,                
            });
        }
    }

    handleBack(){
        this.setState({
            favorityView:false,
            productDetailView:false,
            productsview:true,
            p_detail:{}
        });
    }

    showModal = (txt) => {
        console.log(txt)
        this.setState({setIsModalVisible:true});
    };

    closeModal = () => {
        this.setState({setIsModalVisible:false});
    };
    render() {
        
        return (
            <React.Fragment>
                <Header/>
                    
                <div className="row m-0" style={{padding:'0 31px 0 48px'}}>
                    <div className="col-9 pl-0">

                        <div className='product-items-header'>
                                {/*----------------- product header -----------------*/}
                            { 
                            
                                (this.state.productsview)&& 
                                <React.Fragment>
                                    <h3 className='browse-list-title'>BROWSE FOR PRODUCT LISTINGS</h3> 
                                </React.Fragment>
                            }
                                {/* -----------------product detail header----------- */}
                            { 
                                (this.state.productDetailView) &&
                                <React.Fragment>
                                    <div className="pos-re justifyCenter horizontal-center" style={{marginLeft:'140px'}}>
                                        <button className="size-reduce-btn" style={{left:'0',top:'50%',transform:'translateY(-50%)'}}
                                            onClick={this.handleBack}
                                        >
                                            <ArrowBackIosRoundedIcon className="arrow-back-icon"/>
                                        </button>
                                        <h4 className='list-info-title mb-0'>Phiz Market Home <ChevronRightIcon/> Info</h4>                                        
                                    </div>
                                    <h3 className="information-title">PRODUCT INFORMATIONS</h3>
                                </React.Fragment>
                            }
                               {/* -----------------favority product header----------- */} 
                            { 
                                (this.state.favorityView) &&
                                <React.Fragment>
                                    <div className="pos-re justifyCenter horizontal-center" style={{marginLeft:'140px'}}>
                                        <button className="size-reduce-btn" style={{left:'0',top:'50%',transform:'translateY(-50%)', width:'42px',height:'42px',}}
                                            onClick={this.handleBack}
                                        >
                                            <ArrowBackIosRoundedIcon className="arrow-back-icon"/>
                                        </button>
                                        <h4 className='list-info-title mb-0'>Phiz Market Home <ChevronRightIcon/> Favorites</h4>                                        
                                    </div>
                                    <h3 className="information-title">FAVORITES</h3>
                                </React.Fragment>
                            }                     
                        </div>

                        <div className='product-items-content'>
                            {(this.state.productsview)&&<Product 
                                productsList={this.state.products} 
                                offerProducts={this.state.offerProducts}                               
                                getDetailProductData = {this.handleChangeState}
                                ls = {this.props.s}
                            />}
                            {(this.state.productDetailView)&& <ProductDetail detailData={this.state.p_detail} /> }
                            {(this.state.favorityView)&& <FavoriteProducts favoriteProducts={this.state.favorityProducts}/> }
                        </div>
                    </div>
                    <div className='col-3 p-0 product-side'>
                        <ProductSide
                            ownProductsList={this.state.ownProducts}
                            favorityActive={this.handleChangeState}
                            show={this.showModal}
                        />
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default index
