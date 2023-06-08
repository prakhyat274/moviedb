import React from 'react'

export default function HomeCard(props) {
  return (
    <>
      <div className="homeCard">
        <div className='homePoster'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.imgUrl}`} alt="Movie Poster"/>
              <div className="rate-component">
                <div className='rate-circle'>
                  <div className='rate-value'>{(props.score)*10}%</div>
                </div>
              </div>
        </div>
        {/* <div className='cardTitle'>
          <div>
            <h6 className='text-center' style={{fontSize: "13px"}}>{props.title}</h6>
          </div>
        </div> */}
      </div>
    </>
  )
}
