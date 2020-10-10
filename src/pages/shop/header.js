import React, { Component } from 'react'
import SearBox from '../../components/build/ui-search'

export class header extends Component {
    render() {
        return (
            <div className="shop-header">
                <div className='sh-body pos-re'>
                    <h4 style={{color:'#4E5165'}}>Phiz Market</h4>
                    <div className="serchbox-wrapper pos-ab">
                        <SearBox/>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
