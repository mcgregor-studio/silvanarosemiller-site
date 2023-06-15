import React from "react";
import inclusion from "../../data/assets/inclusion.jpg";
import "./DEI.scss";

export default function DEI() {
  return (
    <section className="dei" id="dei">
      <div className="dei__image">
        <img  src={inclusion} />
      </div>
      <div className="dei__container">
        <h2 className="dei__title">DEI Consulting Services</h2>
        <p className="dei__text">
          Silvana Rose Miller is a media and cultural consultant who specializes
          in Diversity, Equity and Inclusion. Through research, education, and
          her expertise in the industry she reviews projects from their
          conception to final delivery and supports productions in the aim to
          have authentic non-stereotypical characters and stories. Notes would
          cover cultural insights, historical backgrounds, and any political or
          pop cultural events that may cause any DEI flags. 
          <br />
          <br />Services can be
          provided for:
        </p>
        <ul className="dei__list">
          <li>Televisions Series</li>
          <li>Movies / Films</li>
          <li>Casting Calls</li>
          <li>YouTube Content</li>
          <li>Streaming Services</li>
          <li>Commercials</li>
          <li>Video Games</li>
          <li>Apps/Digital Games</li>
        </ul>
        <a className="dei__button" href="#contact">
          Email for a Quote
        </a>
      </div>
      
    </section>
  );
}
