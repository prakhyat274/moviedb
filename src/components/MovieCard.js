import React from 'react'

export default function MovieCard(props) {
  return (
    <>
        <div className="col-md-3 my-3">
            <div className="movieCard">
              <div className='moviePoster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.imgUrl})`, height: "18rem", backgroundSize: 'cover',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <span className='score'><h6>{props.score}</h6></span>
              </div>
              <div className='cardTitle'>
                  <h6 className='text-center'>{props.title}</h6>
              </div>
            </div>
        </div>
    </>
  )
}
