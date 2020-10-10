import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './components/dashboard';
import InstantRoom from './components/instantRoom/instant_room'
import RandomRoom from './components/randomRoom/random_room'
import PromoteMyRoom from './components/promoteRoom'
import GlobalPlay from './components/gameRoom/globalPlay'

class Master extends Component {
  render() {
    return (
      <Router>
          <Switch>    
              {/******************** instant room route ***********************/}
              <Route  path='/instant-room' component={ InstantRoom } />
              <Route  path='/random_room' component={ RandomRoom } />
              <Route  path='/promoteRoom' component={ PromoteMyRoom } />          
              <Route  path='/globalPlay' component={ GlobalPlay } />          
              {/******************** dashboard route ***********************/}
              <Route  path='/' component={ DashboardPage} />              
          </Switch>
      </Router>
    )
  }
}

export default Master
