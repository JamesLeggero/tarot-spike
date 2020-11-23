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
      const drawSet = new Set([])
      while (drawSet.size < 3){
        const card = tarot.drawCard()
        if (card.suit === 'major') {

          drawSet.add(card)
        }
      }
      const draw = [...drawSet]
      // console.log(draw[0].name)
      // console.log('test')
      setDeck(draw)
      console.log(deck)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Welcome />
      <Draw handleSubmit={handleSubmit} deck={deck}/>
      {/* <Reading /> */}
      {/* {
        tarot.majorArcana.map(card =>{
          return (
            console.log(card.rank, card.name)
          )
        })
      } */}
      
    </div>
  );
}

export default App;
