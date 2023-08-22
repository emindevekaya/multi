import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [multiplicand, setMultiplicand] = useState(getRandomValue());
  const [multiplier, setMultiplier] = useState(getRandomValue());
  const [input, setInput] = useState("");
  const correctRef = useRef();
  const wrongRef = useRef();

  const onKeyUp = (event) => {
    if (event.key == "Enter") {
      if (isCorrect()) {
        setCorrectCount(correctCount + 1);
        playAnimation(correctRef);
        reset();
      } else {
        setWrongCount(wrongCount + 1);
        playAnimation(wrongRef);
      }
    }
  };

  const playAnimation = (ref) => {
    ref.current.style.animation = "";
    setTimeout(() => {
      ref.current.style.animation = "pulse 1s";
    }, 0);
  };

  const reset = () => {
    setMultiplicand(getRandomValue());
    setMultiplier(getRandomValue());
    setInput("");
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const isCorrect = () => {
    return multiplicand * multiplier == input;
  };

  function getRandomValue() {
    return parseInt(Math.random() * 10 + 1);
  }

  return (
    <div className="container">
      <div className="multi-container">
        <h1 className="multi-paragraph">
          {multiplicand} x {multiplier}
        </h1>
        <input
          type="number"
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={input}
        />
        <div className="count-container">
          <span ref={correctRef}>✔️{correctCount}</span>
          <span ref={wrongRef}>❌{wrongCount}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
