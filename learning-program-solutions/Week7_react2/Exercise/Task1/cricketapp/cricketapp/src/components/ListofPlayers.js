import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 60 },
    { name: "Gill", score: 75 },
    { name: "Pugal", score: 55 },
    { name: "Pant", score: 78 },
    { name: "Hardik", score: 68 },
    { name: "Karuppu", score: 72 },
    { name: "Jadeja", score: 88 },
    { name: "Shami", score: 65 },
    { name: "Bumrah", score: 69 },
    { name: "Siraj", score: 91 },
  ];

  const lowScorers = players.filter(player => player.score < 70); // ES6 arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => ( // ES6 map()
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
