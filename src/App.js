// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import earth from "./images/planet-earth.png"

import data from "./data"

function App() {
  const cards=data.map(place=>{
    return(
      <Main
      // key={place.id}
      {...place}
      />
    )
  })
  return (
    <div className="App-container">
      
    <Navbar img={earth}/>
    
    {cards}
    </div>
  );
}

export default App;
