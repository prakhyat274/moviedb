import React, { useEffect, useState } from 'react'

export default function Detail(props) {
    const {id, apiKey,type} = props;
    console.log(id)
    const[result,setResult] = useState()
    const[videoArray,setVideoArray] = useState([])
    const[link,setLink] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&append_to_response=videos`;
              let data = await fetch(url);
              let parsedData = await data.json();
              setResult(parsedData);
              setVideoArray(parsedData.videos.results)
            }
          } catch (error) {
            // Handle error
          }
        };
    
        fetchData();
      }, [id, apiKey,type]);

      useEffect(()=>{const linkKey = videoArray.filter((element)=>element.type === "Trailer")
      if (linkKey.length > 0) {
        setLink(linkKey[0].key); // Assuming you want to set the first trailer key
      } else {
        setLink('');
      }},[videoArray])
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
              <h3 className='detailSumTitles'>{type==="tv"?result.name:result.title}</h3>
              <p>{parseInt(result.vote_average*10)}% • {type==="movie"?result.release_date:result.first_air_date} • {result.status}</p>
              <h6 className='detailSumTitles' style={{fontWeight:"900", paddingTop:"40px"}}>Overview</h6>
              <p className='detailSumTitles' style={{fontWeight:"100", paddingTop:"20px"}}>{result.overview}</p>
              {link && <a className='trailerLink' href={`https://www.youtube.com/watch?v=${link}`} target='_blank' rel="noreferrer"><div>
                <h4 className='text-center'>Watch Trailer</h4>
              </div></a>}
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
