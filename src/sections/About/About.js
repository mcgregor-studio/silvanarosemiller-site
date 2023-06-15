import React from "react";
import portrait from "../../data/assets/portrait-photo.jpg";
import "./About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__image">
      <img src={portrait} alt="Portrait of Silvana" />
      </div>
      <div className="about__container">
        <h2 className="about__title">About</h2>
        <p className="about__text">
          Silvana Rose Miller is a Toronto-based TV Development Executive,
          Creative Producer, Writer, and narrative Diversity, Equity, and
          Inclusion consultant. She received her Honours Degree in Cinema &
          Media Studies at York University. <br />
          <br />
          She has worked on shows such as <i>Paw
          Patrol, Rusty Rivets, Netflix’s Grand Army, Lucas the Spider, Total
          Drama-Rama,</i> and <i>Total Drama Island</i>. She currently resides in the
          development sphere working with diverse creators to bring authentic
          stories to the big and small screen. <br />
          <br />Coming from a Jamaican and
          Italian background, Silvana is devoted to her work in the DEI sector
          and making our industry work spaces and the stories that we tell more
          inclusive and equal places.
        </p>
        <h2 className="about__title"><i>Let's make good TV together!</i></h2>
      </div>
    </section>
  );
}
