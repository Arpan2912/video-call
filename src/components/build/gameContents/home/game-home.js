import React, { Component } from 'react'
import GameGallarySwiper from './gallaryswiper';
import GameItems from './gameitem';
import GameEvents from './gameevent'
import $ from "jquery"






export class gameHome extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){
        $('.size-reduce-btn').click(function(){
            $('.g-gallary-wrapper').toggleClass('g-gallary-wrapper-active');
        });
    }
    pregame = (txt) =>{
        // console.log(txt);
        this.props.pregameB(txt); //send to gameContent
    }

    render() {
        return (
            <div className={(this.props.fr)?"row m-0 flag3 firstrun-home":"row m-0 flag3 twicerun-home"} style={{width:'100%'}}>
                <div className="col-8" style={{height:"78.7vh", overflow:"auto", margin:"auto"}}>
                    <div className="g-gallary-wrapper mb-3">
                        <GameGallarySwiper />
                    </div>
                    <div className='g-items-content'>
                        <GameItems history={this.props.history} pregameA={this.pregame} />                        
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="g-right-panel">
                        <GameEvents />                        
                    </div>
                </div>
            </div>
        )
    }

}
export default gameHome
