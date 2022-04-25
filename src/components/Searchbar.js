import { useState } from "react";
import { searchPokemon } from "../api";

export function Searchbar() {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();

  function onChange(event) {
    //console.log("pokemon: ", event.target.value);
    setSearch(event.target.value);
  }

  function onButtonClickHandler() {
    onSearchHandler(search);
    console.log("pokemon: ", search);
  }

  async function onSearchHandler(pokemon) {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
    console.log("pokemon: ", result);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
      {pokemon ? (
        <div>
          <div>Pokemon: {pokemon.name}</div>
          <div>Weight: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
}
