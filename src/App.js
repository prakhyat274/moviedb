import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Tv from './components/Tv';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/movie-popular" element={<Movie catg="popular"/>}/>
        <Route exact path ="/movie-now-playing" element={<Movie catg="now_playing"/>}/>
        <Route exact path ="/movie-upcoming" element={<Movie catg="upcoming"/>}/>
        <Route exact path ="/movie-top-rated" element={<Movie catg="top_rated"/>}/>
        <Route exact path ="/tv-popular" element={<Tv catg="popular"/>}/>
        <Route exact path ="/tv-airing-today" element={<Tv catg="airing_today"/>}/>
        <Route exact path ="/tv-on-the-air" element={<Tv catg="on_the_air"/>}/>
        <Route exact path ="/tv-top-rated" element={<Tv catg="top_rated"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
