import React from "react";

const FlipCounter = ({ counts, onFlip }) => {
  return (
    <div>
      <p>Heads: {counts.heads}</p>
      <p>Tails: {counts.tails}</p>
      <button onClick={onFlip}>Flip Coin</button>
    </div>
  );
};

export default FlipCounter;
