import React, { useState } from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true); // toggle flag

  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>Toggle View</button>
      <hr />
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
