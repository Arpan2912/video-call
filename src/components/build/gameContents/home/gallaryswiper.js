import React from "react";
import Swiper from "react-id-swiper";
import { compose, pure, withProps, withHandlers } from "recompose";


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
      slidesPerView: 1,
      grabCursor: true,
      loopAdditionalSlides: 1,
      watchSlidesVisibility: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween:10,
    };

    let data = [
      {
        
        url: "../../assets/gameImg/gallary (1).jpg",         
      },
      {
        
        url: "../../assets/gameImg/gallary (2).jpg", 
      },
      {
       
        url: "../../assets/gameImg/gallary (3).jpg", 
      },
      {
        
        url: "../../assets/gameImg/gallary (4).jpg", 
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
      // let path = `/instant-room`;
      // this.props.history.push(path);
   }
  }),
  withHandlers({    
    renderDomComponent: ({ handleClick }) => (item, index) => (
      <div key={item.url} className="game-sliders">
          <div className="g-swiper-card">
              <img src={item.url} alt="d"></img>
          </div> 
      </div>
    )
  }),
  pure
)(SwiperApp);
