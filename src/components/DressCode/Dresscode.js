import React from "react";
import dresscode from "../../images/dress-code.svg";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Мы очень старались сделать торжество красивым и гармоничным. Будем благодарны, если вы поддержите стиль и цветовую гамму нашей свадьбы в своих нарядах. </p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
      <p className="dresscode__description">Милых дам будем рады видеть в коктейльных платьях, а прелестных мужчин в костюмах.</p>
    </section>
  );
}

export default Dresscode;