import React from "react";
import "./App.css";
import { Howl } from "howler";
import PlayerContainer from "./components/PlayerContainer";
import ResetContainer from "./components/ResetContainer";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [player1Total, setPlayer1Total] = useLocalStorage("player1Total", 20);
  const [player2Total, setPlayer2Total] = useLocalStorage("player2Total", 20);

  const howl = new Howl({
    src: "https://soundbible.com/mp3/Click2-Sebastian-759472264.mp3",
    html5: true,
  });

  const addPlayer1Total = (amount) => {
    setPlayer1Total((t) => t + amount);
    howl.play();
  };

  const addPlayer2Total = (amount) => {
    setPlayer2Total((t) => t + amount);
    howl.play();
  };

  const reset = () => {
    setPlayer1Total(20);
    setPlayer2Total(20);
    howl.play();
  };

  return (
    <>
      <div className="main-container">
        <PlayerContainer total={player1Total} onClick={addPlayer1Total} />
        <ResetContainer onClick={reset} />
        <PlayerContainer total={player2Total} onClick={addPlayer2Total} />
      </div>
    </>
  );
}

export default App;
