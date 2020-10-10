import React, { Component } from 'react'

export class index extends Component {
    componentDidMount(){

        this.props.handleLinkActive('appState');
    }
    render() {
        return (
            <div>
                 =============================app content here=====================
            </div>
        )
    }
}

export default index
