import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import userData from '../../../data/userData.json';


class profileRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
        profileData:userData
    };
}
  render() {
    return (
      <>

     

      <div className="profile-items-style" >
        <div className="profile-item-title">
            <span>Name</span>
            <span>'s Room</span>
        </div>
        <div className='profile-item-content justifyArround flexWrap'>

        { 
          this.state.profileData[this.props.id]['room'].map((room,j)=>{
          return (
            <Card className="room-card small-card resize-wh" key={j}>
                <div className="img-body">
                    <Card.Img variant="top" src={room["backImg"]} />                           
                </div>
                <Card.Body>
                    <Card.Title className="mb-2">{room["roomName"]}</Card.Title>
                    <Card.Text> {room["description2"]} </Card.Text>
                </Card.Body>  
                <div className="card-hover-effect">
                    <div className="visitRoomBtn">Visit Room</div>
                </div>                              
            </Card>
                )
            })
          }

        </div>
      </div>

      
         
        
      </>
    )
  }
}

export default profileRoom
