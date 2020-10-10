import React, { Component } from 'react'
import TopcardHeader from '../../components/gameRoom/game-topHeader'
import SideList from '../../components/gameRoom/sideList'
import GameContent from '../../components/gameRoom/gameContent'

import '../../css/game.css'

export class index extends Component {
    componentDidMount(){
        this.props.handleLinkActive('gameState');
    }
    render() {
        return (
            <>
                <TopcardHeader />
                <div className="g-page-container">
                    <SideList/>
                    <GameContent />            
                </div>
            </>
                             
        )
    }
}

export default index
