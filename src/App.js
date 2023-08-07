import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause) {
      let value = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => {
        clearTimeout(value);
      };
    }
  });
  const handleReset = () => {
    setTimer(0);
  };
  const handlePause = () => {
    setPause(!pause);
  };
  return (
    <div className="App">
      <div> {timer} </div>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handlePause}>{pause ? "Continue" : "Pause"} </button>
    </div>
  );
}
