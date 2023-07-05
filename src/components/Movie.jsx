import React from 'react'
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

function Movie({item}) {
    const {Title, Year, imdbID, Type, Poster} = item
  return (
    <div key={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster} />
      </div>
      <div className="card-content">
        <span className="card-title  grey-text text-darken-4">{Title}</span>
        <p>
          {Year}
          <span className="right">{Type}</span>
        </p>
        <CiCircleMore className="activator" />
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {Title} <MdOutlineClose className="right card-title" />
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
}

export default Movie