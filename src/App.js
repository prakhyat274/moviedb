import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import Tv from './components/Tv';

function App() {
  const [catg, setcatg] = useState("popular")

  const handleCatg = (category) =>{
    setcatg(category)
  }
  return (
    <>
    <Navbar handleCatg={handleCatg}/>
    {/* <Movie catg={catg}/> */}
    <Tv catg={catg}/>
    </>
  );
}

export default App;
