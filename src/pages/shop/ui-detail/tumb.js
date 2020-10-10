import React, { Component } from 'react'
import Swiper from "react-id-swiper";



export class tumb extends Component {
  constructor(props){
    super(props);
    this.sendUrl = this.sendUrl.bind(this)        
  }

  componentDidMount(){
    var y = document.getElementsByClassName("tumb-content")[0];
    y.style.border='2px ridge #ff8300'
  }

  sendUrl(url,ij){
    var x = document.getElementsByClassName("tumb-content")[ij];
    let len = document.getElementsByClassName("tumb-content").length;     
    for(let i = 0; i < len;i++ ){
      document.getElementsByClassName("tumb-content")[i].style.border = '2px ridge #2b2e44';
    }
    x.style.border='2px ridge #ff8300';

    this.props.changeImg(url);
  }


  render() {
    const { tumbs } = this.props;
    const params = {
      slidesPerView: 3,
      slidesPerGroup: 1,
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
      // grabCursor: true,  
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      spaceBetween: 10
    };

    const Slide = (item,i) => (
      <div key={i} className="tumb-sliders">
        <div className="tumb-content" onClick={()=>this.sendUrl(item,i)}>
          <img src={item} alt="d"></img>
        </div>
      </div>
    );

    const SlideMapper = tumbs => {
      return tumbs.map((item, i) => Slide(item,i));
    };

    return <Swiper {...params}>{SlideMapper(tumbs)}</Swiper>;
  }
}


export default tumb
