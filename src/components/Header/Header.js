import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__link" to="#contact">
          Contact
        </Link>

        <Link className="header__link" to="#about">
          About
        </Link>
        <Link className="header__link" to="#dei">
          DEI
        </Link>
        <Link className="header__link" to="#testimonials">
          Testimonials
        </Link>
      </div>
    </header>
  );
}
