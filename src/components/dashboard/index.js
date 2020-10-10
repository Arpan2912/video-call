import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from  '../../dashboardRoutes';

import LeftSideBar from './LeftSideBar'
import '../../css/dashboard-common.css'

export class index extends Component {
    constructor(props){
        super(props);
        this.state = {
        leftStatu: false,
        }
        this.handleLinkActive =  this.handleLinkActive.bind(this);
        
    }

    handleLinkActive(txt){
        this.refs.leftSidebar.handleLinkActive(txt);
    }

    lefStatus = (status) =>{
        console.log(status)
        this.setState({leftStatu:status});
    }

    render() {
        return (
            <>
            <div className="dashboard-app">
                <LeftSideBar ref="leftSidebar" leftStatus={this.lefStatus}/>
                <div className="dashboar-main" id="dashboardMain">
                    <div className="dashboard-container">
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                <Route
                                    key={idx}                                    
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}                                    
                                    render={props => (                                    
                                    <route.component {...props} handleLinkActive={this.handleLinkActive}  s = {this.state.leftStatu}/>
                                    )} />
                                ) : (null);
                            })}
                        </Switch>
                    </div>
                </div>
            </div>
            <div className="bright-fillter pos-ab dn"></div>            
            </>

        )
    }
}

export default index
