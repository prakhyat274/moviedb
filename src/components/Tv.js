import React, {useState,useEffect} from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const Tv = (props) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const {catg, apiKey} = props;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if(catg){
            let url = `https://api.themoviedb.org/3/tv/${catg}?language=en-US&page=${page}&api_key=${apiKey}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setResults(parsedData.results);
          }
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    }, [page,catg, apiKey]);

    const handlePrevClick = () =>{
      if(page>1){
        setPage(page-1)
      }
    }

    const handleNextClick = () =>{
      setPage(page+1)
    }
  
  return (
    <div className='container my-2'>
      <h3 className='text-center'>{props.pgTitle}</h3>
      <div className="category-nav">
          <Link to="/tv-popular">Popular</Link>
          <Link to="/tv-top-rated">Top Rated</Link>
        </div>
      <div className='row my-3'>
      {
          results.map((movie)=>{
              return <div key={movie.id} className="col-lg-3 col-md-6 col-xs-12 my-3">
                <MovieCard title={movie.name} score={movie.vote_average} imgUrl={movie.poster_path}/>
                </div>
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
export default Tv;