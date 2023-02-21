import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  const [stateTime, setStateIime] = useState(0);
  const [debouncedState, setDebouncedState] = useState(state);
  const ref = useRef(Date.now());
  const limit = 1000;
  useEffect(() => {
    const difference = stateTime - ref.current;
    if (difference >= limit) {
      setDebouncedState(state);
      ref.current = Date.now();
    }

    return () => {};
  }, [state, debouncedState, stateTime]);

  const inputHandler = (e) => {
    setState(e);
    setStateIime(Date.now());
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        //value={debouncedState}
        onChange={(e) => inputHandler(e.target.value)}
      />
      <div>value: {state}</div>
      <div>debouneced : {debouncedState}</div>
    </div>
  );
}
