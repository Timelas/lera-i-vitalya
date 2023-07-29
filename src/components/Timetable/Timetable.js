import React from "react";
import "./Timetable.css";
import rings from "../../images/rings.svg";
import foto from "../../images/foto.svg";
import glasses from "../../images/glasses.svg";
import plate from "../../images/plate.svg";
import cake from "../../images/cake.svg";
import car from "../../images/car.svg";
import lineStart from "../../images/start.svg";
import lineEnd from "../../images/end.svg";
import lineCenter from "../../images/center.svg";
import timetable from "../../images/timetable_1.svg";
import time from "../../images/time.svg";

function Timetable() {
  return (
    <section className="timetable" id="plan">
      <img src={timetable} alt="заголовок" className="timetable__header"></ img>
      <img alt="time" className="timetable__time" src={time}></img>
    </section>
  );
}

export default Timetable;