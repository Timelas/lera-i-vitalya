import React from "react";
import "./Header.css";
import date from "../../images/headertext_2.svg";
import foto from "../../images/foto_3.png";

function Header() {
  return (
    <section className="header" id="home">
      <img src={foto} alt="молодожены" className="header__image"></ img>
      <img src={date} alt="21 сентября" className="header__date"></ img>
    </section>
  );
}

export default Header;