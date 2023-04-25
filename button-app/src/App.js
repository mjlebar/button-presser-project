import "./App.css";
import { useState } from "react";

function App() {
  const [presses, setPresses] = useState({
    Blue: 0,
    Green: 0,
    Red: 0,
    Orange: 0,
  });
  const [user, setUser] = useState("Blue");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <div className="App">
      <header>
        <p>Welcome to the button presser!</p>
      </header>
      <button
        className={user}
        onClick={() => setPresses({ ...presses, [user]: presses[user] + 1 })}
      >
        Press me
      </button>
      <p>Number of times button pressed: {presses[user]}</p>
      <label>
        Select user:
        <select value={user} onChange={handleChange}>
          <option value="Green">Green</option>
          <option value="Orange">Orange</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
        </select>
      </label>
    </div>
  );
}

export default App;
