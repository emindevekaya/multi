import React from "react";
import PlayerBox from "./PlayerInnerContainer";
import PlayerText from "./LifeText";
import "../styles/player-container.css";

function PlayerContainer(props) {
  const { onClick, total } = props;
  return (
    <div className="player-container">
      <PlayerBox
        bgColor={"green"}
        onClick={() => {
          onClick(1);
        }}
      />
      <PlayerBox
        bgColor={"red"}
        onClick={() => {
          onClick(-1);
        }}
      />
      <PlayerText total={total} />
    </div>
  );
}

export default PlayerContainer;
