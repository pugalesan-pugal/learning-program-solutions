import React from "react";

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "Gill", "Pant", "Ashwin", "Shami"];
  const evenPlayers = ["Rohit", "Rahul", "Hardik", "Jadeja", "Bumrah", "Siraj"];
  const [odd1, odd2, ...restOdd] = oddPlayers;
  const [even1, even2, ...restEven] = evenPlayers;

  // Merge arrays (spread operator)
  const T20players = ["Virat", "Rohit", "Gill"];
  const RanjiPlayers = ["Sundar", "Sarfaraz", "Tripathi"];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team</h2>
      <p>{odd1}, {odd2}, {restOdd.join(", ")}</p>

      <h2>Even Team</h2>
      <p>{even1}, {even2}, {restEven.join(", ")}</p>

      <h3>Merged Team (T20 + Ranji)</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
