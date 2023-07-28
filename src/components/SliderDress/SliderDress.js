import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from "../../images/dress1.jpg";
import slider2 from "../../images/dress2.jpg";
import slider3 from "../../images/dress3.jpg";
import slider4 from "../../images/dress4.jpg";
import slider5 from "../../images/dress5.jpg";
import slider6 from "../../images/dress6.jpg";
import slider7 from "../../images/dress7.jpg";
import slider8 from "../../images/dress8.jpg";
import slider9 from "../../images/dress9.jpg";
import slider10 from "../../images/dress10.jpg";
import slider11 from "../../images/dress11.jpg";
import slider12 from "../../images/dress12.jpg";
import slider13 from "../../images/dress13.jpg";
import slider14 from "../../images/dress14.jpg";
import slider15 from "../../images/dress15.jpg";
import slider16 from "../../images/dress16.jpg";
import arrow from "../../images/arrow.svg";
import "../DressCode/Dresscode.css";
import "./SliderDress.css";


const Gallery = () => {
  return (
    <AliceCarousel 
        mouseTracking
        disableDotsControls 
        responsive={{
            0: { items: 3 },
            500: { items: 4 },
            1024: { items: 5 }
        }}
        infinite={true}
        renderPrevButton={() => {
          return <img className="slider__btn-dress slider__btn-pre-dress"
          alt="стрелка назад"
          src={arrow}></img>
        }}
        renderNextButton={() => {
          return <img className="slider__btn-dress slider__btn-next-dress"
          alt="стрелка вперед"
          src={arrow}></img>
        }}
    >
        <img key={slider1} src={slider1} alt="dresscode" className="dresscode__image-dress"></img>
        <img key={slider2} src={slider2} alt="dresscode" className="dresscode__image-dress"></img>
        <img key={slider3} src={slider3} alt="dresscode" className="dresscode__image-dress"></img>
        <img key={slider4} src={slider4} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider5} src={slider5} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider6} src={slider6} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider7} src={slider7} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider8} src={slider8} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider10} src={slider10} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider11} src={slider11} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider12} src={slider12} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider13} src={slider13} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider14} src={slider14} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider15} src={slider15} alt="dresscode" className="dresscode__image-dress"/>
        <img key={slider16} src={slider16} alt="dresscode" className="dresscode__image-dress"/>
    </AliceCarousel>
  );
}

export default Gallery;