import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../../css/room.css";
import {Card} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


export class index extends Component {
    componentDidMount(){
        this.props.handleLinkActive('roomState');
    }
    render() {
        return (
            <div className="page-content room-content row">

                <div className="top-page-header col-12">                    
                    <Card className="top-card-body">
                        <Card.Title className="mb-0">Room</Card.Title>
                        <div className="search-box">
                            <div className="searchIcon">
                            <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Card>
                </div>

                <div className="room-array-section">
                    <Card className="room-card middle-card">
                        <div className="img-body">
                            <Card.Img variant="top" src="../../assets/roomImg/promot-undergroupGame.jpg" />                           
                        </div>
                        <Card.Body>
                            <Card.Title className="mb-2">Room Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="room-card middle-card">
                        <div className="img-body">
                            <Card.Img variant="top" src="../../assets/roomImg/promot-undergroupGame.jpg" />                           
                        </div>
                        <Card.Body>
                            <Card.Title className="mb-2">Room Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="room-card middle-card">
                        <div className="img-body">
                            <Card.Img variant="top" src="../../assets/roomImg/promot-undergroupGame.jpg" />                           
                        </div>
                        <Card.Body>
                            <Card.Title className="mb-2">Room Name</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="room-card middle-card puls-card justity-center">
                        <img src="../../assets/icons/big-plus.svg" alt="puls"></img>
                    </Card>

                </div>

            </div>

        )   
    }
}

export default index
