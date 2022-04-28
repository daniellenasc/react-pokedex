import { useState, useEffect } from "react";
import { getPokemons, getPokemonData } from "./api";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Pokedex } from "./components/Pokedex";
import { Searchbar } from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);
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

  function updateFavoritePokemons(name) {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    setFavorites(updatedFavorites);
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
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
    </FavoriteProvider>
  );
}

export default App;
