import React from "react";
import Movie from "./Movie";

function Movies({movies}) {
  return (
      <div className="movies">
        {movies?.map((item)=>{
            return (<Movie key={item.imdbID} item={item} />)
        })}
      </div>
  );
}

export default Movies;
