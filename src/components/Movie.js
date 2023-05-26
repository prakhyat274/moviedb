import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom"

const Movie = (props) => {
  const { catg, apiKey } = props;
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const handleClick = async (id,type="movie") =>{
    await props.changeId(id,type)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (catg) {
          let url = `https://api.themoviedb.org/3/movie/${catg}?language=en-US&page=${page}&api_key=${apiKey}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          setResults(parsedData.results);
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [page, catg, apiKey]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="container my-2">
      <h3 className="text-center">{props.pgTitle}</h3>
      <div className="category-nav">
        <Link to="/movie-popular">Popular</Link>
        <Link to="/movie-top-rated">Top Rated</Link>
      </div>
      <div className="row my-1">
        {results.map((movie) => {
          return (
            <div onClick={() => handleClick(movie.id)} key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">
              <Link to="/details"><MovieCard
                title={movie.title}
                score={movie.vote_average}
                imgUrl={movie.poster_path}
              /></Link>
            </div>
          );
        })}
      </div>
      <div className="container pager my-4">
        <button onClick={handlePrevClick}>&larr; Prev</button>
        <button onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  );
};
export default Movie;
