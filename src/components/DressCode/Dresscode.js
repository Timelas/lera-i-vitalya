import React from "react";
import dresscode from "../../images/dress-code.svg";
import SliderDress from "../SliderDress/SliderDress";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Мы очень старались сделать торжество красивым и гармоничным. Будем благодарны, если вы поддержите стиль нашей свадьбы в своих нарядах. 
      Милых дам будем рады видеть в коктейльных платьях, а прелестных мужчин в костюмах.<br /><br />Мы подготовили для вас образы, чтобы вам было легче выбрать наряд:</p>
      <SliderDress />
    </section>
  );
}

export default Dresscode;