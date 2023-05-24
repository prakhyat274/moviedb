import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <Link to="/" className='nav-logo'><img src="/navlogo.png" alt="MovieDb Logo" /></Link>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/movie-popular">Movie</Link></li>
          <li><Link to="/tv-popular">TV Shows</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    </div>
  )
}
