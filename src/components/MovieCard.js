import React from 'react'

export default function MovieCard(props) {
  return (
    <>
        <div className="col-md-3 my-3">
            <div className="movieCard">
              <div className='moviePoster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.imgUrl})`, height: "18rem", backgroundSize: 'cover',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="rate-component">
                      <div className='rate-circle'>
                        <div className='rate-value'>{(props.score)*10}%</div>
                      </div>
                    </div>
              </div>
              <div className='cardTitle'>
                <div>
                  <h6 className='text-center'>{props.title}</h6>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
