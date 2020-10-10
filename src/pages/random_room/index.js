import React, { Component } from 'react'
import '../../css/room.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { GradiantButton } from '../../components/styles'
export class index extends Component {
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }
    componentDidMount(){
        this.props.handleLinkActive('randomState');
    }

    routeChange(){
        let path = `/dashboard/randomRoom-setup`;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="instant-room-container">
                <div className="search-bar-container">
                    <p className="gray-color font-20 text-uppercase mb-0 font-weight-bold">Random room</p>
                    <div className="search-input-container">
                        <SearchRoundedIcon className="search-icon"/>
                        <input type="text" className="search-textbox" placeholder="Search..." />
                    </div>
                </div>
                <div style={{paddingTop: "111px"}}>
                    <p className="da-title-color font-33 text-center font-weight-bold">RANDOMLY CONNECT TO PEOPLE FROM AROUND THE GLOBE</p>
                    <div className="instant-room-rectangle-container">
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/random2x.png"} alt="" width={"120px"} />
                            <p className="da-title-color font-30 text-center mb-0">connect randomly</p>
                        </div>
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/skip2x.png"} alt=""  width={"120px"} />
                            <p className="da-title-color font-30 text-center mb-0">skip anytime you want</p>
                        </div>
                        <div className="instant-room-one-item">
                            <img src={"../../assets/icons/makeFriend2x.png"} alt=""  width={"120px"} />
                            <p className="da-title-color font-30 text-center mb-0">and make friends!</p>
                        </div>
                    </div>
                    <div className="justify-align-center" style={{paddingTop: "80px"}}>
                        <GradiantButton width="520px" height="80px" value="PROCEED" onClick={this.routeChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
