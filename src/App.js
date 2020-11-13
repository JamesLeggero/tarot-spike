import './App.css';
import React, { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Draw from './components/Draw'
import Reading from './components/Reading'
const tarot = require('tarot-deck')

function App() {

  const [deck, setDeck] = useState([])

  useEffect(()=>{

  }, [deck])

  const handleSubmit = event => {
    event.preventDefault()
    
    try {
      const draw = tarot.drawReading()
      console.log(draw)
      console.log('test')
      setDeck(draw)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Welcome />
      <Draw handleSubmit={handleSubmit} deck={deck}/>
      <Reading />
      
    </div>
  );
}

export default App;
