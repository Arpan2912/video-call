import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
import CreateProduct from './createProduct';
import ImgPreview from './upload-Img-preview'

export class productSide extends Component {
    constructor() {
        super();
        this.state = {
            ownProducts:[],
            isCreateModalVisible:false,
            isImagePreviewModalVisible:false,
            file:[],
            ImgLen:''
        }  
        this.sendState = this.sendState.bind(this);      
    };
    componentDidMount(){
        this.setState({ownProducts:this.props.ownProductsList});        
    }

    sendState(){
        this.props.favorityActive("favority");
    }

    callbackFunction = (filearry) =>{
        if(filearry){
            this.setState({file:filearry})
            this.setState({isImagePreviewModalVisible:true})
            this.setState({isCreateModalVisible:false}) 
        }
    }

    showModal = () => {
        this.setState({isCreateModalVisible:true})        
    }; 

    closeModal = () => {
        this.setState({isCreateModalVisible:false})
        const arr = [];
        this.setState({file:arr})
        this.setState({ImgLen:''})
    };
    
    closeImgModal = () => {
        this.setState({isImagePreviewModalVisible:false})
        this.setState({isCreateModalVisible:true}) 
    };

    ImageLen = (len) =>{
        console.log(len);
        this.setState({ImgLen:len});        
    }
    render() { 

        return (
            <React.Fragment>
                <div className="favorite-action-btn">
                    <Button className="t-back bugHover" style={{width:'233px', height:'66px', borderRadius:'100px',outline:'none'}}
                        onClick={this.sendState}
                    >FAVORITES
                    </Button>
                </div>

                <div className='sidebottomBlock favorite-add-body' onClick={this.showModal}>
                    <div className="plus-action-btn">
                        <div className="big-plus-icon"></div>
                    </div>
                    <div className="plus-action-description">
                        <h4>Create Product Listing</h4>
                    </div>                    
                </div>
                <CreateProduct visible={this.state.isCreateModalVisible} ImgNum={this.state.ImgLen} close={this.closeModal} parentCallback={this.callbackFunction} />
                <ImgPreview visible={this.state.isImagePreviewModalVisible} close={this.closeImgModal} dataFromParent = {this.state.file} ImgLen = {this.ImageLen}/>


                <div className="sidebottomBlock own-products">
                    <div className="g-back own-product-header">
                        <h5>Your Products</h5>
                    </div>
                    <div className="own-product-items"> 
                        <List>
                        {
                            this.state.ownProducts.map((o_p,ij)=>{
                                return(
                                    <ListItem key={ij}>
                                        <ListItemAvatar>
                                            <Avatar src={o_p.backImg} alt='' />
                                        </ListItemAvatar>
                                        <ListItemText 
                                            primary={<Typography style={{ color: '#FF8300',fontSize:'13px' }}>{o_p.name}</Typography>} 
                                            secondary={<Typography style={{color:'white', fontSize:'10px' }}>$<span>{o_p.cost}</span> USD</Typography> }
                                        />
                                        <MoreVertIcon className="more-vert"/>
                                    </ListItem>
                                )
                            })
                        }                            
                        </List>
                    </div>
                    
                </div>
                
            </React.Fragment>
            
        )
    }
}

export default productSide
