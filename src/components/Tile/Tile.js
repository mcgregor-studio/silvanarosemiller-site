import React from "react";
import "./Tile.scss";

export default function Tile(props) {
  return (
    <div className="tile">
      <p className="tile__text">"{props.quote}"</p>
      <p className="tile__text">- <strong>{props.person}</strong>, <i>{props.job}</i></p>
    </div>
  );
}
