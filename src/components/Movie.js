import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const { catg } = props;
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (catg) {
          let url = `https://api.themoviedb.org/3/movie/${catg}?language=en-US&page=${page}&api_key=27cd734d5a7c24864cfe2d4da48e2832`;
          let data = await fetch(url);
          let parsedData = await data.json();
          setResults(parsedData.results);
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [page, catg]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="container my-3">
      <h3 className="text-center">{props.pgTitle}</h3>
      <div className="row my-3">
        {results.map((movie) => {
          return (
            <div key={movie.id} className="col-md-3 my-3">
              <MovieCard
                title={movie.original_title}
                score={movie.vote_average}
                imgUrl={movie.poster_path}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button onClick={handlePrevClick}>&larr; Prev</button>
        <button onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  );
};
export default Movie;
