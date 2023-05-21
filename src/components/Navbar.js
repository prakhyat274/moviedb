import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <a href="/" className='nav-logo'><img src="/navlogo.png" alt="MovieDb Logo" /></a>
        <div className='nav-items'>
          <ul>
          <li><Link to="/" className='link'>Home</Link></li>
            <li className='parent-drop link'>Movie
              <ul className='dropdown'>
                <li className='link'><Link to="/movie-popular">Popular</Link></li>
                <li className='link'><Link to="/movie-now-playing">Now Playing</Link></li>
                <li className='link'><Link to="/movie-upcoming">Upcoming</Link></li>
                <li className='link'><Link to="/movie-top-rated">Top Rated</Link></li>
              </ul>
            </li>
            <li className='parent-drop link'>TV Shows
              <ul className='dropdown'>
                <li className='link'><Link to="/tv-popular">Popular</Link></li>
                <li className='link'><Link to="/tv-airing-today">Airing Today</Link></li>
                <li className='link'><Link to="/tv-on-the-air">On TV</Link></li>
                <li className='link'><Link to="/tv-top-rated">Top Rated</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>  
      <div className='nav-items'>
          <ul>
              <li><Link to="/about" className='link'>About MDb</Link></li>
          </ul>
          <input type="text" placeholder='Search' className='search' />
      </div>
    </div>
  )
}
