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

  const firstMeaning = [], 
    secondMeaning = [], 
    thirdMeaning = []

  let draw = []

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
      
      draw = [...drawSet]
      console.log(draw[0].name)
      // console.log('test')
      setDeck(draw)
      for (let i = 0; i < 3; i++) {
        // deck[i].reversed === false ?
        // firstMeaning = deck[i].meanings.light[Math.floor(Math.random() * deck[i].meanings.light.length]
        // console.log(deck[i].name)
      }
      // console.log(deck)
      
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
            console.log(card)
          )
        })
      } */}
      
    </div>
  );
}

export default App;
