import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Using useState to manage counter
  const [counter, setCounter] = useState(15);

  function addValue() {
    if (counter === 20) {
      console.log(" Max no clicked");
    } else {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter === 0) {
      console.log("stop");
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value </button>
    </>
  );
}

export default App;
