import React from "react";
import Tile from "../../components/Tile/Tile";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials__title">
        Testimonials
      </h2>
      <div className="testimonials__container">
        <Tile />
      </div>
    </section>
  );
}
