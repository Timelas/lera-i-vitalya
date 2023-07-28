import React from "react";
import where from "../../images/info_1.svg";
import wedding from "../../images/info.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date" id="place">
      <img className="info-date__wedding" alt="основная информация" src={wedding}></img>
      <img className="info-date__where" alt="основная информация" src={where}></img>
    </section>
  );
}

export default InfoDate;