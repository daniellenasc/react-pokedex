export function Navbar() {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img className="navbar-img" alt="pokeapi-logo" src={logoImg} />
      </div>
    </nav>
  );
}
