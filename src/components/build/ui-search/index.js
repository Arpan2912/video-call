import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export class index extends Component {
    render() {
        return (
            <div>
                <div className="search-box">
                    <div className="searchIcon">
                    <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}                        
                    />
                </div>
            </div>
        )
    }
}

export default index
