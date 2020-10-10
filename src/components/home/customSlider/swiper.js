import React from "react";
import Swiper from "react-id-swiper";
import {Card} from 'react-bootstrap';
import { compose, pure, withProps, withHandlers } from "recompose";
import { Link } from 'react-router-dom'


const SwiperApp = ({
  data,
  params,
  renderDomComponent
}) => (
  <div className="container swiper-window">
    <Swiper {...params}>{data.map(renderDomComponent)}</Swiper>
  </div>
);

export default compose(
  withProps(() => {
    const params = {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.4,
      grabCursor: true,
      effect: "coverflow",
      loopAdditionalSlides: 1,
      watchSlidesVisibility: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 170,
        depth: 180,
        modifier: 1,
        slideShadows: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    let data = [
      {
        name: "Google",
        link1: "../../assets/roomImg/promot-phantom.jpg",
        link2: "../../assets/roomImg/room-game.jpg" ,
        route: "../../promoteRoom",  
      },
      {
        name: "Amazon",
        link1: "../../assets/roomImg/promot-music.jpg",
        link2: "../../assets/roomImg/promot-net.jpg",
        route: "../../promoteRoom",  

      },
      {
        name: "Facebook",
        link1: "../../assets/roomImg/promot-heroGame.jpg",
        link2: "../../assets/roomImg/promot-ninja.jpg",
        route: "../../promoteRoom",  
        
      }   
    ];
    
    return {
      params,
      data
    };
  }),
  withHandlers({
    handleClick: () => link => () => {
      console.log(link);
    },
    routeChange: () => {
      alert();
   }
  }),
  withHandlers({    
    renderDomComponent: ({ handleClick }) => (item, index) => (
      <div key={item.name} className="swiperitem">
        <Link to={item.route}>
          <Card className="room-card small-card promoteCard" >          
            <div className="img-body">
                <Card.Img variant="top" src={item.link1} />                           
            </div>
            <Card.Body>
                <Card.Title className="mb-2">Room Name</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <div className="card-hover-effect">
              <div className="visitRoomBtn">Visit Room</div>
            </div>
          </Card>
        </Link>
        <Link to={item.route}>
          <Card className="room-card small-card promoteCard">
              <div className="img-body">
                  <Card.Img variant="top" src={item.link2} />                           
              </div>
              <Card.Body>
                  <Card.Title className="mb-2">Room Name</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
              </Card.Body>
              <div className="card-hover-effect">
                <div className="visitRoomBtn">Visit Room</div>
              </div>
          </Card>
        </Link>
      </div>
    )
  }),
  pure
)(SwiperApp);
