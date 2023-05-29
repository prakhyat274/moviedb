import React from 'react'

export default function MovieCard(props) {
  return (
    <>
      <div className="movieCard">
        <div className='moviePoster'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`} alt="Movie Poster"/>
              <div className="rate-component">
                <div className='rate-circle'>
                  <div className='rate-value'>{parseInt(props.score)*10}%</div>
                </div>
              </div>
        </div>
        <div className='cardTitle'>
          <div>
            <h6 className='text-center'>{props.title}</h6>
          </div>
        </div>
      </div>
    </>
  )
}
