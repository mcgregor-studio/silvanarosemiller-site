import React from "react";

export default function Tile(props) {
  return (
    <div className="tile">
      <p>"{props.quote}"</p>
      <p>- <strong>{props.person}</strong>, <i>{props.job}</i></p>
    </div>
  );
}
