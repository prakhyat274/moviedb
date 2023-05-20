import React, {useState,useEffect} from 'react'
import MovieCard from './MovieCard'

const MyComponent = () => {
    const [results, setResults] = useState([]);
    // const [totalResults, setTotalResults] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = "https://api.themoviedb.org/3/movie/popular?api_key=836c03a343ff77c99b95f34696f9f606";
          let data = await fetch(url);
          let parsedData = await data.json();
          setResults(parsedData.results);
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Latest Released Movies</h3>
      <div className='row my-3'>
      {
          results.map((movie)=>{
              return <MovieCard title={movie.original_title} score={movie.vote_average} imgUrl={movie.poster_path}/>
          })
      }
      </div>
    </div>
  )
}
export default MyComponent;