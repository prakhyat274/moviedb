import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default function Search(props) {
    const {apiKey} = props;
    const [results,setResults] = useState([])
    const [target,setTarget] = useState("")
    const [catg,setCatg] = useState("movie")
    
    const handleClick = async (id,catg) =>{
      await props.changeId(id,catg)
    }

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
            <Link className={catg === 'movie' ? 'active-sub' : ''} onClick={() => setCatg("movie")}>Moives</Link>
            <Link className={catg === 'tv' ? 'active-sub' : ''} onClick={() => setCatg("tv")}>TV Shows</Link>
        </div>
        <input onChange={handleSearchChange} type='text' placeholder='Search' id='search'/>
        <div className='row'>
        {
            results.map((movie)=>{
              if(catg==="movie")
              return(
                movie.poster_path && <div onClick={() => handleClick(movie.id,catg)} key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">         
                  <Link to="/details"><MovieCard
                  title={movie.title}
                  score={Math.floor(movie.vote_average*10)/10}
                  imgUrl={movie.poster_path}/></Link>
                </div>
              )
              else
              return(
                movie.poster_path && <div onClick={() => handleClick(movie.id,catg)} key={movie.id} className="coloumn col-lg-3 col-md-6 col-xs-12 my-3">         
                  <Link to="/details"><MovieCard
                  title={movie.name}
                  score={Math.floor(movie.vote_average*10)/10}
                  imgUrl={movie.poster_path}/></Link>
                </div>
              )
            })
        }
        </div>
    </div>
  )
}
