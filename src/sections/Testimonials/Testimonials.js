import React, { useState, useEffect } from "react";
import background from "../../data/assets/screen.jpg";
import Tile from "../../components/Tile/Tile";
import "./Testimonials.scss";

export default function Testimonials() {

  const [testimonial, setTestimonial] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setTestimonial(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <img className="testimonials__background" src={background} alt="Movie screen"/>
      <h2 className="testimonials__title">Industry Testimonials</h2>
      <div className="testimonials__container">
        {testimonial.map((data) => (
          <Tile quote={data.quote} person={data.person} job={data.job} />
        ))}
      </div>
    </section>
  );
}
