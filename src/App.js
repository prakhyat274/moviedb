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
        <Route exact path ="/movie-popular" element={<Movie pgTitle="Popular Movies" catg="popular"/>}/>
        <Route exact path ="/movie-now-playing" element={<Movie pgTitle="Movies Now Playing" catg="now_playing"/>}/>
        <Route exact path ="/movie-upcoming" element={<Movie pgTitle="Upcoming Movies" catg="upcoming"/>}/>
        <Route exact path ="/movie-top-rated" element={<Movie pgTitle="Top Rated Movies" catg="top_rated"/>}/>
        <Route exact path ="/tv-popular" element={<Tv pgTitle="Popular TV Shows" catg="popular"/>}/>
        <Route exact path ="/tv-airing-today" element={<Tv pgTitle="TV Shows Airing Today" catg="airing_today"/>}/>
        <Route exact path ="/tv-on-the-air" element={<Tv pgTitle="TV Shows Airing Now" catg="on_the_air"/>}/>
        <Route exact path ="/tv-top-rated" element={<Tv pgTitle="Top Rated TV Shows" catg="top_rated"/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
