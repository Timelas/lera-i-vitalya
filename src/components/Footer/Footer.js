import React from "react";
import names from "../../images/namesFooter.svg";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">Ждем вас на нашем торжестве,</p>
      <img src={names} alt="Алексей и Виктория" className="footer__names"></ img>
    </section>
  );
}

export default Footer;