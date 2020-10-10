import React, { Component } from 'react'
import DitailMedia from './ui-detail/media'
import DetailData from './ui-detail/data'
import DetailReview from './ui-detail/review'
// import $ from "jquery"


export class productDetail extends Component {
    divRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
          selectedProduct:{},
        }
    }
    
    componentDidMount(){
        this.setState({selectedProduct:this.props.detailData})
    }
   
    render() {
       let data = this.state.selectedProduct;
       let name = data.name;
       let cost = data.cost;
       let review = data.review;
       let star = data.star;   
        return (            
            <div className="product-detail-body">
                <section className="p-information row m-0">
                    <div className='p-i-media col-6'>
                        <div>
                            <DitailMedia de_Meida={this.props.detailData} />
                        </div>
                    </div>
                    <div className="p-i-data col-6">
                        <div>
                            <DetailData de_Data={
                                { name,cost,review,star }
                            }/>
                        </div>
                    </div>
                </section>
                <section className='p-review row m-0' style={{paddingLeft:'45px'}}>
                    <div>
                        <DetailReview/>
                    </div>
                </section>               
            </div>
        )
    }
    
}

export default productDetail
