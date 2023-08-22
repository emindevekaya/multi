import React from "react";
import "../styles/life-text.css";

function LifeText(props) {
  const { total } = props;
  return <div className="life-text">{total}</div>;
}

export default LifeText;
