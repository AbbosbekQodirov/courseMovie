import React, { useState } from "react";

function Search({ handleDown,  changeType}) {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("all");

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    changeType(type)
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field inline searchForm">
          <input
            id="email_inline"
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDown(search);
                setSearch("");
              }
            }}
          />
          <button
            onClick={() => {
                handleDown(search);
                setSearch("");
            }}
            className="waves-effect waves-light btn "
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              onChange={handleFilter}
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              onChange={handleFilter}
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={type === "movie"}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              onChange={handleFilter}
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={type === "series"}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Search;
