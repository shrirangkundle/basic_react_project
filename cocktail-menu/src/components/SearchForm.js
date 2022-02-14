import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useReducer("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your fav cocktail here</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;