import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <a href="/" className='nav-logo'><img src="/navlogo.png" alt="MovieDb Logo" /></a>
        <div className='nav-items'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <input type="text" placeholder='Search' className='search' />
        </div>
    </div>
  )
}
