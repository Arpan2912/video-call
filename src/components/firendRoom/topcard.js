import React, { Component } from 'react'
import SearchBox from '../build/ui-search'

export class topcard extends Component {
    constructor(props){
        super(props);
        this.state={
          users:[],
        }

        this.sendState=this.sendState.bind(this);
    }

    componentDidMount(){
        
    }

    sendState(){ 
        this.props.parentCallback("vc");
    }

    render() {
        return (
            <div className="fr-top-card">  
              {(this.props.fName)!=="" ? 

                    <div className="message-state-header pos-re">
                        <div className="horizontal-center">
                            <h5>{this.props.fName}</h5>
                            <span>online</span>
                        </div> 
                        <div className="fr-hearder-serch-wraper">
                            <SearchBox/>
                        </div>
                        <div className="fr-top-icon-wrapper">
                            <div className="fr-camera-icon" onClick={this.sendState}></div>
                            <div className="fr-gift-icon"></div>
                            <div className="m-f-icon"></div> 
                        </div>
                    </div> 

                    : 

                    <h3 >Friend's list</h3>
              }
            </div>
        )
    }
}

export default topcard
