import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import React, {useState} from 'react';

function App() {
  const [catg, setcatg] = useState("popular")

  const handleCatg = (category) =>{
    setcatg(category)
  }
  return (
    <>
    <Navbar handleCatg={handleCatg}/>
    <Movie catg={catg}/>
    </>
  );
}

export default App;
