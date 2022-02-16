import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './slideshow.css';
import image1 from './images/bank1.jpg';
import image2 from './images/bank2.jpg';
import image3 from './images/bank3.jpg';
import image4 from './images/bank4.jpg';
import image5 from './images/bank5.jpg';

function Slideshow() {
    return (
      <div className="slide">
       <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
      <img src={image5} className="sliderimg"/>
</AliceCarousel>
</div>
    )
}
export default Slideshow;