import { Pokemon } from "./Pokemon";

export function Pokedex(props) {
  const { pokemons, loading } = props;
  console.log("pokemons: ", pokemons);
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação</div>
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
