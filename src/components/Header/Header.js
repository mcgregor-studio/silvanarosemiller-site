import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="header__container">
        <Link className="header__link" to="/contact">
          Contact
        </Link>

        <Link className="header__link" to="/coding">
          Coding
        </Link>
        <Link className="header__link" to="/creative">
          Creative
        </Link>
      </div>
    </header>
  );
}
