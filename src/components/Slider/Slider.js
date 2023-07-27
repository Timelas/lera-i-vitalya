import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from "../../images/slider1.JPG";
import slider2 from "../../images/slider2.JPG";
import arrow from "../../images/arrow.svg";
import "../DressCode/Dresscode.css";
import "./Slider.css";


const Gallery = () => {
  return (
    <AliceCarousel 
        className="slider__block"
        mouseTracking
        disableDotsControls 
        responsive={{
            0: { items: 1 },
            500: { items: 1 },
            1024: { items: 1 }
        }}
        infinite={true}
        renderPrevButton={() => {
          return <img className="slider__btn slider__btn-pre"
          alt="стрелка назад"
          src={arrow}></img>
        }}
        renderNextButton={() => {
          return <img className="slider__btn slider__btn-next"
          alt="стрелка вперед"
          src={arrow}></img>
        }}
    >
      <div className="details__slider">
        <img key={slider1} src={slider1} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">МАМА ЖЕНИХА ТАТЬЯНА</p>
        <p className="details__description">с цифрами и очаровательностью на “ты”, звезда любого пляжа</p>
      </div>
      <div className="details__slider">
        <img key={slider2} src={slider2} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ПАПА ЖЕНИХА АЛЕКСАНДР</p>
        <p className="details__description">мастер на все руки, прочитал более 1000 книг, повелитель электричества</p>
      </div>
        {/* <img key={slider3} src={slider3} alt="dresscode" className="dresscode__image"></img>
        <img key={slider4} src={slider4} alt="dresscode" className="dresscode__image"/>
        <img key={slider5} src={slider5} alt="dresscode" className="dresscode__image"/>
        <img key={slider6} src={slider6} alt="dresscode" className="dresscode__image"/>
        <img key={slider7} src={slider7} alt="dresscode" className="dresscode__image"/>
        <img key={slider8} src={slider8} alt="dresscode" className="dresscode__image"/>
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image"/>
        <img key={slider10} src={slider10} alt="dresscode" className="dresscode__image"/>
        <img key={slider11} src={slider11} alt="dresscode" className="dresscode__image"/>
        <img key={slider12} src={slider12} alt="dresscode" className="dresscode__image"/>
        <img key={slider13} src={slider13} alt="dresscode" className="dresscode__image"/>
        <img key={slider14} src={slider14} alt="dresscode" className="dresscode__image"/>
        <img key={slider15} src={slider15} alt="dresscode" className="dresscode__image"/>
        <img key={slider16} src={slider16} alt="dresscode" className="dresscode__image"/>
        <img key={slider17} src={slider17} alt="dresscode" className="dresscode__image"/>
        <img key={slider18} src={slider18} alt="dresscode" className="dresscode__image"/>
        <img key={slider19} src={slider19} alt="dresscode" className="dresscode__image"/>
        <img key={slider20} src={slider20} alt="dresscode" className="dresscode__image"/>
        <img key={slider21} src={slider21} alt="dresscode" className="dresscode__image"/>
        <img key={slider22} src={slider22} alt="dresscode" className="dresscode__image"/>
        <img key={slider23} src={slider23} alt="dresscode" className="dresscode__image"/>
        <img key={slider24} src={slider24} alt="dresscode" className="dresscode__image"/>
        <img key={slider25} src={slider25} alt="dresscode" className="dresscode__image"/>
        <img key={slider26} src={slider26} alt="dresscode" className="dresscode__image"/>
        <img key={slider27} src={slider27} alt="dresscode" className="dresscode__image"/>
        <img key={slider28} src={slider28} alt="dresscode" className="dresscode__image"/>
        <img key={slider29} src={slider29} alt="dresscode" className="dresscode__image"/>
        <img key={slider30} src={slider30} alt="dresscode" className="dresscode__image"/>
        <img key={slider31} src={slider31} alt="dresscode" className="dresscode__image"/>
        <img key={slider32} src={slider32} alt="dresscode" className="dresscode__image"/>
        <img key={slider33} src={slider33} alt="dresscode" className="dresscode__image"/>
        <img key={slider34} src={slider34} alt="dresscode" className="dresscode__image"/>
        <img key={slider35} src={slider35} alt="dresscode" className="dresscode__image"/>
        <img key={slider36} src={slider36} alt="dresscode" className="dresscode__image"/>
        <img key={slider37} src={slider37} alt="dresscode" className="dresscode__image"/>
        <img key={slider38} src={slider38} alt="dresscode" className="dresscode__image"/>
        <img key={slider39} src={slider39} alt="dresscode" className="dresscode__image"/>
        <img key={slider40} src={slider40} alt="dresscode" className="dresscode__image"/>
        <img key={slider41} src={slider41} alt="dresscode" className="dresscode__image"/> */}
    </AliceCarousel>
  );
}

export default Gallery;