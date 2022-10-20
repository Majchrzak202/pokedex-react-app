import React from "react";

const Moves = ({ pokemon }) => {
  return (
    <div style={{ width: "100%" }}>
      <ul style={{ listStyleType: "none" }}>
        {pokemon.moves.slice(0, 10).map((move) => (
          <li key={move.move.name} item xs={6} sm={6} md={6} lg={6}>
            {move.move.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Moves;
