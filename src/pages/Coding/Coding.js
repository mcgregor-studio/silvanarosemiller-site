import React from "react";
import Tile from "../../components/Tile/Tile";
import develop1 from "../../data/assets/develop-1.png";
import develop2 from "../../data/assets/develop-2.png";
import develop3 from "../../data/assets/codepen-logo.svg";
import develop4 from "../../data/assets/github-logo.svg"; 
import "./Coding.scss";

export default function Coding() {
  return (
    <section className="coding">
      <h2 className="coding__title">
        — This collection of coding projects uses the React codebase and covers a variety of subjects, from microsites to webpage
        recreations.
      </h2>

      <div className="coding__container">
        <Tile className="coding__tile" link="https://www.teamultraforce.com" source={develop1} />
        <Tile className="coding__tile" link="https://gallerai-client.herokuapp.com" source={develop2} />
        <Tile className="coding__tile" link="https://codepen.io/mcgregor-studio" source={develop3} />
        <Tile className="coding__tile" link="https://github.com/mcgregor-studio" source={develop4} />
      </div>
    </section>
  );
}
