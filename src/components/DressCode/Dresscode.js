import React from "react";
import dresscode from "../../images/dress-code.svg";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Мы подготовили для вас <a href="https://pin.it/4oZY0d3" target="_blank" className="dresscode__link">образы</a>, чтобы вам было легче выбрать наряд</p>
    </section>
  );
}

export default Dresscode;