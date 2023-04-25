import "./App.css";
import { useState } from "react";

function App() {
  const [presses, setPresses] = useState(0);
  return (
    <div className="App">
      <header>
        <p>Welcome to the button presser!</p>
      </header>
      <button onClick={() => setPresses(presses + 1)}>Press me</button>
      <p>Number of times button pressed: {presses}</p>
    </div>
  );
}

export default App;
