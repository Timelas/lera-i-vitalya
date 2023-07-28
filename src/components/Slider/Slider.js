import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from "../../images/slider1.JPG";
import slider2 from "../../images/slider2.JPG";
import slider3 from "../../images/slider3.jpg";
import slider4 from "../../images/slider4.JPG";
import slider5 from "../../images/slider5.JPG";
import slider6 from "../../images/slider6.jpg";
import slider7 from "../../images/slider7.JPG";
import slider8 from "../../images/slider8.jpg";
import slider9 from "../../images/slider9.jpg";
import slider10 from "../../images/slider10.JPG";
import slider11 from "../../images/slider11.jpg";
import slider12 from "../../images/slider12.jpeg";
import slider13 from "../../images/slider13.JPG";
import slider14 from "../../images/slider14.jpg";
import slider15 from "../../images/slider15.jpeg";
import slider16 from "../../images/slider16.JPG";
import slider17 from "../../images/slider17.jpg";
import slider18 from "../../images/slider18.PNG";
import slider19 from "../../images/slider19.PNG";
import slider20 from "../../images/slider20.jpg";
import slider21 from "../../images/slider21.jpg";
import slider22 from "../../images/slider22.jpg";
import slider23 from "../../images/slider23.jpg";
import slider24 from "../../images/slider24.jpg";
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
      <div className="details__slider">
        <img key={slider3} src={slider3} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">БРАТ ЖЕНИХА ИВАН</p>
        <p className="details__description">возведет любой дом вслепую и расскажет все о здоровом образе жизни</p>
      </div>
      <div className="details__slider">
        <img key={slider4} src={slider4} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">СЕСТРА ЖЕНИХА АНАСТАСИЯ</p>
        <p className="details__description">профессиональная создательница красоты или мама двух дочек</p>
      </div>
      <div className="details__slider">
        <img key={slider5} src={slider5} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">СЕРГЕЙ (МУЖ АНАСТАСИИ)</p>
        <p className="details__description">точно научит как держать дисциплину и оставаться в атлетической форме</p>
      </div>
      <div className="details__slider">
        <img key={slider6} src={slider6} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">МАМА НЕВЕСТЫ ТАТЬЯНА</p>
        <p className="details__description">мастер спорта по всем видам спорта, с легкостью сориентирует в винном отделе и сведет с ума своей обольстительностью</p>
      </div>
      <div className="details__slider">
        <img key={slider7} src={slider7} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ПАПА НЕВЕСТЫ ЕВГЕНИЙ</p>
        <p className="details__description">если коротко: человек года, предприниматель с большой буквы</p>
      </div>
      <div className="details__slider">
        <img key={slider8} src={slider8} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">БРАТ НЕВЕСТЫ ВЛАДИМИР</p>
        <p className="details__description">купит/продаст все что угодно за считанные минуты, продвинутый пользователь авито</p>
      </div>
      <div className="details__slider">
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">БАБУШКА НЕВЕСТЫ ГАЛИНА</p>
        <p className="details__description">под ее чутким руководством вырос не один росток на грядке и двое сыновей!</p>
      </div>
      <div className="details__slider">
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДЕДУШКА НЕВЕСТЫ ВАЛЕРИЙ</p>
        <p className="details__description">глава водоканала в прошлом и искусный кулинар и бармен в настоящем (делает обалденный самогон)!</p>
      </div>
      <div className="details__slider">
        <img key={slider10} src={slider10} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ТЕТЯ НЕВЕСТЫ ИРИНА</p>
        <p className="details__description">профессионально сдаст, продаст, купит любую недвижимость</p>
      </div>
      <div className="details__slider">
        <img key={slider11} src={slider11} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ТЕТЯ НЕВЕСТЫ ЕЛЕНА</p>
        <p className="details__description">модный критик с эстетическими убеждениями на жизнь, гуру декора</p>
      </div>
      <div className="details__slider">
        <img key={slider12} src={slider12} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДЯДЯ НЕВЕСТЫ АНДРЕЙ</p>
        <p className="details__description">блондин с голубыми глазами, звонким смехом, острым чувством юмора и домиком в Выборге</p>
      </div>
      <div className="details__slider">
        <img key={slider13} src={slider13} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">СЕСТРА НЕВЕСТЫ АННА</p>
        <p className="details__description">красавица-модница жена, мама Мирона, который не прошел возрастной ценз мероприятия</p>
      </div>
      <div className="details__slider">
        <img key={slider14} src={slider14} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДРУГ СЕМЬИ ВЛАДИСЛАВ (МУЖ АННЫ)</p>
        <p className="details__description">убережет от любой юридической неприятности</p>
      </div>
      <div className="details__slider">
        <img key={slider15} src={slider15} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДРУГ СЕМЬИ ДМИТРИЙ</p>
        <p className="details__description">с ним никогда не страшно встрять в любые неприятности</p>
      </div>
      <div className="details__slider">
        <img key={slider16} src={slider16} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОКЛАССНИК ЖЕНИХА АЛЕКСЕЙ</p>
        <p className="details__description">знает все о мемах, политике и беспилотниках, превосходный актер</p>
      </div>
      <div className="details__slider">
        <img key={slider17} src={slider17} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОКЛАССНИК ЖЕНИХА ПАВЕЛ</p>
        <p className="details__description">самый красивый белорусский волейболист, был в Дагестане</p>
      </div>
      <div className="details__slider">
        <img key={slider18} src={slider18} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОКЛАССНИК ЖЕНИХА ВЛАДИМИР</p>
        <p className="details__description">под его капельницей был весь Петербург</p>
      </div>
      <div className="details__slider">
        <img key={slider19} src={slider19} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ПОДРУГА СЕМЬИ ЭЛИНА (ЖЕНА ВЛАДИМИРА)</p>
        <p className="details__description">обыграет всех в любую настолку, начинающая мама дочки</p>
      </div>
      <div className="details__slider">
        <img key={slider20} src={slider20} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОКЛАССНИЦА НЕВЕСТЫ МАРИЯ</p>
        <p className="details__description">озвучит любой ролик, с легкостью выйдет в любой эфир, еще одна мамочка на старте</p>
      </div>
      <div className="details__slider">
        <img key={slider21} src={slider21} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДРУГ СЕМЬИ ВАСИЛИЙ (МУЖ МАРИИ)</p>
        <p className="details__description">расскажет как и зачем тренироваться и что взять с собой</p>
      </div>
      <div className="details__slider">
        <img key={slider22} src={slider22} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОКЛАССНИЦА НЕВЕСТЫ ВАЛЕРИЯ</p>
        <p className="details__description">сориентирует по любой болячке, готовится к триатлону</p>
      </div>
      <div className="details__slider">
        <img key={slider23} src={slider23} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ДРУГ СЕМЬИ КОНСТАНТИН (МУЖ ВАЛЕРИИ)</p>
        <p className="details__description">и станцует, и споет, и на гитаре сыграет</p>
      </div>
      <div className="details__slider">
        <img key={slider24} src={slider24} alt="dresscode" className="dresscode__image"></img>
        <p className="details__names">ОДНОГРУППНИЦА НЕВЕСТЫ МАРИЯ</p>
        <p className="details__description">специалист по вкусному кофе и криптовалюте, поддержит абсолютно любую тему</p>
      </div>
    </AliceCarousel>
  );
}

export default Gallery;