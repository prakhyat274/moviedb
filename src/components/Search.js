import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default function Search(props) {
    const {apiKey} = props;
    const [results,setResults] = useState([])
    const [target,setTarget] = useState("")
    const [catg,setCatg] = useState("movie")
    
    useEffect(()=>{
      const fetchData = async () => {
        try {
          if (catg) {
            let url = `https://api.themoviedb.org/3/search/${catg}?api_key=${apiKey}&query=${target}`
            let data = await fetch(url);
            let parsedData = await data.json();
            setResults(parsedData.results);
          }
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    },[apiKey,target,catg]);

    const handleSearchChange = () => {
      setTarget(document.getElementById('search').value);
    }

  return (
    <div className='container'>
        <div className="category-nav my-3">
            <Link onClick={() => setCatg("movie")}>Moives</Link>
            <Link onClick={() => setCatg("tv")}>TV Shows</Link>
        </div>
        <input onChange={handleSearchChange} type='text' placeholder='Search' id='search'/>
        <div className='row'>
        {
            results.map((movie)=>{
              if(catg==="movie")
              return(
                movie.poster_path && <div key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">         
                  <MovieCard
                  title={movie.title}
                  score={movie.vote_average}
                  imgUrl={movie.poster_path}/>
                </div>
              )
              else
              return(
                movie.poster_path && <div key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">         
                  <MovieCard
                  title={movie.name}
                  score={movie.vote_average}
                  imgUrl={movie.poster_path}/>
                </div>
              )
            })
        }
        </div>
    </div>
  )
}
