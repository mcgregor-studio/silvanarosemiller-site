import React from "react";
import Logo from "../../components/Logo/Logo";
import brush from "../../data/assets/brush.svg";
import code from "../../data/assets/code.svg";
import phone from "../../data/assets/phone.svg";
import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <section className="homepage">
      <Logo />
      <h2 className="homepage__title">
        — Christopher McGregor is an interactive media designer, with work in
        design, printing, and web development.
      </h2>
      <div className="homepage__container">
        <Link className="homepage__card--link" to="/contact">
          <div className="homepage__card">
            <h2 className="homepage__card--text contact">Contact</h2>
            <img className="homepage__card--icon" src={phone} alt="phone icon" />
          </div>
        </Link>
        <Link className="homepage__card--link middle" to="/coding">
          <div className="homepage__card">
            <h2 className="homepage__card--text coding">Coding</h2>
            <img className="homepage__card--icon" src={code} alt="coding icon" />

          </div>
        </Link>
        <Link className="homepage__card--link" to="/creative">
          <div className="homepage__card">
            <h2 className="homepage__card--text creative">Creative</h2>
            <img className="homepage__card--icon" src={brush} alt="brush icon" />
          </div>
        </Link>
      </div>
    </section>
  );
}
