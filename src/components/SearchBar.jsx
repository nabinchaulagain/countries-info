import React, { useContext } from "react";
import { Context } from "../context";
const SearchBar = () => {
  const context = useContext(Context);
  return (
    <form
      className="form-group form-inline has-search  mx-auto text-center m-2 col-lg-4"
      onSubmit={context.onSubmit}
    >
      <input
        type="text"
        className="form-control col-10"
        placeholder="Search"
        onChange={event => {
          context.onQueryChange(event.target.value);
        }}
        value={context.searchQuery}
      />
      <span
        className="fa fa-search form-control-feedback ml-2"
        style={{ cursor: "pointer" }}
        onClick={context.onSubmit}
      />
    </form>
  );
};

export default SearchBar;
