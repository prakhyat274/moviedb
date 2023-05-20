import React, {useState,useEffect} from 'react'
import MovieCard from './MovieCard'

const MyComponent = () => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=836c03a343ff77c99b95f34696f9f606`;
          let data = await fetch(url);
          let parsedData = await data.json();
          setResults(parsedData.results);
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    }, [page]);

    const handlePrevClick = () =>{
      if(page>1){
        setPage(page-1)
      }
    }

    const handleNextClick = () =>{
      setPage(page+1)
    }
  
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Top Rated Movies</h3>
      <div className='row my-3'>
      {
          results.map((movie)=>{
              return <MovieCard title={movie.original_title} score={movie.vote_average} imgUrl={movie.poster_path}/>
          })
      }
      </div>
      <div className='pager d-flex justify-content-center my-4'>
        <button onClick={handlePrevClick}>&larr; Prev</button>
        <button onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}
export default MyComponent;