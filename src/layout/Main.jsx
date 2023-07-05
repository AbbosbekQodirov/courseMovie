import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies';
import Loader from '../components/Loader';
import Search from '../components/Search';

function Main() {

  const [movies, setMovies] = useState([])
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("panda");
  const [type, setType] = useState("all");

  useEffect(()=>{
    const getData = async ()=>{
      setIsPending(true)
      const req = await fetch(
        `http://www.omdbapi.com/?apikey=867ca67a&s=${name}${type !== 'all' ? `&type=${type}` : ""}`
      );
      const data = await req.json()
      
      setMovies(data.Search);
      setIsPending(false)
     
    }
    
    getData()
  }, [name, type])



  const handleDown = (search)=>{
    setName(search)
  }
  
   const changeType = (type) => {
     setType(type);
   };

  return (
    <div className="container content">
      <Search handleDown={handleDown} changeType={changeType} />
      {isPending && <Loader />}
      {movies === undefined && (
        <div className='error'>
          <img
            src="https://media.istockphoto.com/id/1142986365/vector/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-design-modern-vector.jpg?s=612x612&w=0&k=20&c=E0Y1GZsaRrEk-a2eW49WKCjRFd9SS1MitZ6Vly1HAs8="
            alt=""
          />
        </div>
      )}
      {movies && <Movies movies={movies} />}
    </div>
  );
}

export default Main