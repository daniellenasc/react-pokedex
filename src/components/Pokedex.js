import { Pagination } from "./Pagination";
import { Pokemon } from "./Pokemon";

export function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props;
  //console.log("pokemons: ", pokemons);

  function onLeftClickHandler() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function onRightClickHandler() {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
}
