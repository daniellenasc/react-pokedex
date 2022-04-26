import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "./api";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Searchbar } from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 25;
  async function fetchPokemons() {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.error("error: ", error);
    }
  }

  useEffect(() => {
    //console.log("carregou");
    fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
