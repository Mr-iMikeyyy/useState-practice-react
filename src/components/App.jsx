import React, { useState } from "react";

// let buttonClicked = false;

// function getTime () {
//   buttonClicked = true;
// }

// function getTime () {
//   setDisplayedTime(displayedTime = time)
// }

function App() {
  let time = new Date().toLocaleTimeString();
  let [displayedTime, setDisplayedTime] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setDisplayedTime(newTime);
  }

  return (
    <div className="container">
      <h1>{displayedTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
