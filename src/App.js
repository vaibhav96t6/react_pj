import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [likeCounter, setlikeCounter] = useState(0);

  return (
    <div className="App">
      <h1>click on like button below</h1>

      <button onClick={() => setlikeCounter(likeCounter + 1)}>Like</button>
      {likeCounter}
      <button onClick={() => setlikeCounter(likeCounter - 1)}>Dislike</button>
    </div>
  );
}
