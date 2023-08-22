import React from "react";
import "../styles/reset-container.css";

function ResetContainer(props) {
  return (
    <div className="reset-container" onClick={props.onClick}>
      <i className="fas fa-xmark reset-icon"></i>
    </div>
  );
}

export default ResetContainer;
