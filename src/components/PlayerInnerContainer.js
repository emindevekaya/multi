import React from "react";
import "../styles/player-inner-container.css";

function PlayerInnerContainer(props) {
  return (
    <div
      className="player-inner-container"
      style={{ backgroundColor: props.bgColor }}
      onClick={props.onClick}
    />
  );
}

export default PlayerInnerContainer;
