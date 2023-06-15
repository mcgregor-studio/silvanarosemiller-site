import React from "react";
import background from "../../data/assets/TVs.jpg";
import "./Header.scss";

export default function Header() {
  return (
    <header
      className="header"
      style={{
        background: `url(${background}), #ffc9c9 no-repeat cover 120% 50%`
      }}
    >
      <h2 className="header__title">Silvana Rose Miller: <br />DEI Consulting, Writing & Producing</h2>
      <div className="header__container">
        <a className="header__link" href="#about">
          About
        </a>
        <a className="header__link" href="#dei">
          DEI
        </a>
        <a className="header__link" href="#testimonials">
          Testimonials
        </a>
        <a className="header__link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}
