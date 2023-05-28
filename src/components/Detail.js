import React, { useEffect, useState } from 'react'

export default function Detail(props) {
    const {id, apiKey,type} = props;
    const[result,setResult] = useState()
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&append_to_response=videos`;
              let data = await fetch(url);
              let parsedData = await data.json();
              setResult(parsedData);
            }
          } catch (error) {
            // Handle error
          }
        };
    
        fetchData();
      }, [id, apiKey,type]);
  if(result){
    return ( 
        <div className='container detailBody' style={{marginTop:"50px"}}>
            <div className='detailPoster'>
              <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}alt="Movie Poster"/>
              <div className='posterTitle'>
                <h4 className='text-center'>Watch Now</h4>
              </div>
            </div>
            <div className='detailSum'>
              <h3 className='detailSumTitles'>{type==="tv"?result.name:result.original_title}</h3>
              <h6 className='detailSumTitles' style={{fontWeight:"900", paddingTop:"40px"}}>Overview</h6>
              <p className='detailSumTitles' style={{fontWeight:"100", paddingTop:"20px"}}>{result.overview}</p>
              <a className='trailerLink' href="https://youtube.com/" target='_blank' rel="noreferrer"><div>
                <h4 className='text-center'>Watch Trailer</h4>
              </div></a>
            </div>
        </div>
      )
  }
  else{
    return(
        <h1>Loading</h1>
    )
  }
}