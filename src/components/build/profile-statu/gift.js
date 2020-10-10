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
      slidesPerView: 3.2,
      grabCursor: true,
      loopAdditionalSlides: 1,
      watchSlidesVisibility: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // spaceBetween:10,
    };

    let data = [
      {
        name: "Ice Cold Beer",
        coin:'10 phiz coins',
        url: "../../assets/gift/gift (1).png",         
      },
      {
        name: "Yummy Burger",
        coin:'20 phiz coins',
        url: "../../assets/gift/gift (2).png", 
      },
      {
        name: "Sweet Ice Cream",
        coin:'15 phiz coins',
        url: "../../assets/gift/gift (3).png", 
      },
      {
        name: "Cute Puppy",
        coin:'30 phiz coins',
        url: "../../assets/gift/gift (4).png", 
      },
      {
        name: "Adorable Elephant",
        coin:'15 phiz coins',
        url: "../../assets/gift/gift (5).png", 
      },
      {
        name: "Green Car",
        coin:'10 phiz coins',
        url: "../../assets/gift/gift (6).png", 
      },
      {
        name: "Winged Heart",
        coin:'9 phiz coins',
        url: "../../assets/gift/gift (7).png", 
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
  }),
  withHandlers({    
    renderDomComponent: ({ handleClick }) => (item, index) => (
      <div key={item.name} className="gift-sliders">
          <div className="gift-card">
            <div className="gi-card-content">
              <img src={item.url} alt="d"></img>
              <h5>{item.name}</h5>
              <p>{item.coin}</p>
            </div>
          </div> 
      </div>
    )
  }),
  pure
)(SwiperApp);
