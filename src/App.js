import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "./api";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Searchbar } from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);

  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons() {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.error("error: ", error);
    }
  }

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
