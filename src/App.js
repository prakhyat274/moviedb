import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Tv from './components/Tv';
import React from 'react';
import config from './config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const apiKey = config.apiKey;
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/movie-popular" element={<Movie pgTitle="Popular Movies" catg="popular" apiKey={apiKey}/>}/>
        <Route exact path ="/movie-now-playing" element={<Movie pgTitle="Movies Now Playing" catg="now_playing" apiKey={apiKey}/>}/>
        <Route exact path ="/movie-upcoming" element={<Movie pgTitle="Upcoming Movies" catg="upcoming" apiKey={apiKey}/>}/>
        <Route exact path ="/movie-top-rated" element={<Movie pgTitle="Top Rated Movies" catg="top_rated" apiKey={apiKey}/>}/>
        <Route exact path ="/tv-popular" element={<Tv pgTitle="Popular TV Shows" catg="popular" apiKey={apiKey}/>}/>
        <Route exact path ="/tv-airing-today" element={<Tv pgTitle="TV Shows Airing Today" catg="airing_today" apiKey={apiKey}/>}/>
        <Route exact path ="/tv-on-the-air" element={<Tv pgTitle="TV Shows Airing Now" catg="on_the_air" apiKey={apiKey}/>}/>
        <Route exact path ="/tv-top-rated" element={<Tv pgTitle="Top Rated TV Shows" catg="top_rated" apiKey={apiKey}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
