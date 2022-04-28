import { useState } from "react";

export function Searchbar(props) {
  const [search, setSearch] = useState("ditto");
  const { onSearch } = props;

  function onChangeHandler(event) {
    //console.log("pokemon: ", event.target.value);
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(undefined);
    }
  }

  function onButtonClickHandler() {
    onSearch(search);
    console.log("pokemon: ", search);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
}
