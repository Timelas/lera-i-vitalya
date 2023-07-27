import React from "react";
import details from "../../images/details.svg";
import Slider from "../Slider/Slider";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">Мы хотим познакомить вас с гостями на нашей свадьбе</p>
        <Slider />
    </section>
  );
}

export default Details;