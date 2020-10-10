import React, { Component } from 'react'
import SearchBox from '../build/ui-search/index'
export class topHeader extends Component {
    render() {
        return (
            <div className="g-page-header">
                <div className="g-page-header-body pos-re horizontal-center">
                    <h4 style={{color:'#4E5165'}}>Phiz Appp Store</h4>
                    <div className="g-page-header-searchbox-wrapper">
                        <SearchBox/>
                    </div>
                </div>
            </div>
        )
    }
}

export default topHeader
