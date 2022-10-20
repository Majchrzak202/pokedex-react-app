
import React, { useState, useEffect } from "react";
import PokemonList from "./components/pokemon-list/PokemonList";
import PokemonPage from "./components/pokemon-page/PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=35&offset=0"
      );
      const data = await response.json();
      setPokemons(data);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: '100vw'
      }}
      
    >
      <PokemonList pokemons={pokemons} setSelectPokemon={setSelectPokemon} />
      <PokemonPage selectPokemon={selectPokemon} />
    </div>
  );
}

export default App;
