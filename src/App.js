import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Tv from './components/Tv';
import React, { useState } from 'react';
import config from './config';
import Search from './components/Search';
import Detail from './components/Detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const apiKey = config.apiKey;
  const [id,setId]= useState('');
  const [type,setType] = useState('');

  const  changeId = (id,type) =>{
    setId(id)
    setType(type)
  }
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/movie-popular" element={<Movie pgTitle="Popular Movies" catg="popular" apiKey={apiKey} changeId={changeId}/>}/>
        <Route exact path ="/movie-top-rated" element={<Movie pgTitle="Top Rated Movies" catg="top_rated" apiKey={apiKey} changeId={changeId}/>}/>
        <Route exact path ="/tv-popular" element={<Tv pgTitle="Popular TV Shows" catg="popular" apiKey={apiKey} changeId={changeId}/>}/>
        <Route exact path ="/tv-top-rated" element={<Tv pgTitle="Top Rated TV Shows" catg="top_rated" apiKey={apiKey} changeId={changeId}/>}/>
        <Route exact path ="/search" element={<Search changeId={changeId} apiKey={apiKey}/>}/>
        <Route exact path ="/details" element={<Detail type={type} id={id} apiKey={apiKey}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
