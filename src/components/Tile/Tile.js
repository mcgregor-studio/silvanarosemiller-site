import React from "react";

export default function Tile(props) {
  return (
    <a href={props.link}>
      <img className={props.className} src={props.source} alt="link icon" />
    </a>
  );
}
