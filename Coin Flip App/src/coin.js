import React, { useState } from "react";
import Coin from "./Coin";
import FlipCounter from "./FlipCounter";

const App = () => {
  const [currentFlip, setCurrentFlip] = useState(null);
  const [counts, setCounts] = useState({ heads: 0, tails: 0 });

  const flipCoin = () => {
    const isHeads = Math.random() > 0.5;
    const result = isHeads ? "heads" : "tails";

    setCurrentFlip(result);
    setCounts((prevCounts) => ({
      ...prevCounts,
      [result]: prevCounts[result] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Coin Flip Game</h1>
      <Coin side={currentFlip} />
      <FlipCounter counts={counts} onFlip={flipCoin} />
    </div>
  );
};

export default App;
