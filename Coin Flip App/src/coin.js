import React from "react";

const Coin = ({ side }) => {
  const images = {
    heads: "https://via.placeholder.com/100?text=Heads", // Replace with actual image URLs
    tails: "https://via.placeholder.com/100?text=Tails",
  };

  return (
    <div>
      {side ? (
        <img src={images[side]} alt={`Coin showing ${side}`} />
      ) : (
        <p>No coin flipped yet!</p>
      )}
    </div>
  );
};

export default Coin;
