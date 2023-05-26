import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <Link to="/" className='nav-logo'><img src="/navlogo.png" alt="MovieDb Logo" /></Link>
        <ul>
        <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
          <li><NavLink activeclassname="active" to="/movie-popular">Movie</NavLink></li>
          <li><NavLink activeclassname="active" to="/tv-popular">TV Shows</NavLink></li>
          <li><NavLink activeclassname="active" to="/search">Search</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
