import React from 'react'

export default function Navbar(props) {
  const handleItemClick = (newValue) =>{
    props.handleCatg(newValue)
  }
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <a href="/" className='nav-logo'><img src="/navlogo.png" alt="MovieDb Logo" /></a>
        <div className='nav-items'>
          <ul>
          <li><a href="/" className='link'>Home</a></li>
            <li className='parent-drop link'>Movie
              <ul className='dropdown'>
                <li onClick={() => handleItemClick("popular")} className='link'>Popular</li>
                <li onClick={() => handleItemClick("now_playing")} className='link'>Now Playing</li>
                <li onClick={() => handleItemClick("upcoming")} className='link'>Upcoming</li>
                <li onClick={() => handleItemClick("top_rated")} className='link'>Top Rated</li>
              </ul>
            </li>
            <li className='parent-drop link'>TV Shows
              <ul className='dropdown'>
                <li onClick={() => handleItemClick("popular")} className='link'>Popular</li>
                <li onClick={() => handleItemClick("airing_today")} className='link'>Airing Today</li>
                <li onClick={() => handleItemClick("on_the_air")} className='link'>On TV</li>
                <li onClick={() => handleItemClick("top_rated")} className='link'>Top Rated</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
      <div className='nav-items'>
          <ul>
              <li><a href="/about" className='link'>About MDb</a></li>
          </ul>
          <input type="text" placeholder='Search' className='search' />
      </div>
    </div>
  )
}
