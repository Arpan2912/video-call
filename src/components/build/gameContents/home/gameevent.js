import React, { Component } from 'react';
import gameData from '../../../../data/gameData.json';
import $ from "jquery"


export class gameevent extends Component {
        constructor(props){
          super(props);
          this.state={
              g_events:gameData.eventdata,
          }
        }

        componentDidMount(){
            $('.size-reduce-btn').click(function(){
                $('.g-item-header').toggleClass('resize-g-item-header');
              });
        }


    render() {
        return (            
            <div className="event-content">
                <div className="event-content-header g-back">
                    <h4>Upcoming Events</h4>
                </div>
                <div className="event-content-body">
                    <div className="g-event-card-wrapper">
                        { 
                            this.state.g_events.map((event,j)=>{
                                return (
                                    <div className="g-event-card pos-re mb-3" key={j}>
                                        <div className="g-event-card-back">
                                            <img src={event.gameback} alt=""></img>
                                        </div>
                                        <div className={(event.status)?"event-status pos-ab g-back":"dn"}>
                                            <span>{event.status}</span>         
                                        </div>
                                        <div className="event-date pos-ab">
                                            <span>{event.eventDate[0]}</span> 
                                            <span>.{event.eventDate[1]}</span>        
                                            <span>,{event.eventDate[2]}</span>        
                                        </div>
                                        <div className="g-event-card-conttent pos-ab">
                                            <h4>{event.gameName}</h4>
                                            <p className="mb-0">{event.gameDescription}</p>
                                            <div className="vs-wrapper">
                                                <div className="g-users-image-wrapper">
                                                    <img src={event.u1Image} alt=""/>
                                                </div>
                                                <div className="g-users-vs-wrapper">                                        
                                                    <h5>VS</h5>
                                                </div>
                                                <div className="g-users-image-wrapper">
                                                    <img src={event.u2Image} alt=""/>
                                                </div>
                                            </div>
                                            <div className="g-vs-user-name-wrapper">
                                                <div className="g-vs-u1">{event.u1Name}</div>
                                                <div className="g-vs-u-space"></div>
                                                <div className="g-vs-u2">{event.u2Name}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default gameevent
