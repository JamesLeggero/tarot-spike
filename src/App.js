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

  let firstMeaning = [], 
    secondMeaning = [], 
    thirdMeaning = [],
    draw = []

  function assignMeaning (meaning, i) {
    draw[i].reversed === false ?
    meaning = draw[i].meanings.light[Math.floor(Math.random() * draw[i].meanings.light.length)] :
    meaning = draw[i].meanings.shadow[Math.floor(Math.random() * draw[i].meanings.shadow.length)]
    return meaning
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(tarot.drawReading(5))
    
    try {
      const drawSet = new Set([])
      while (drawSet.size < 3) {
        const card = tarot.drawCard()
        if (card.suit === 'major') {

          drawSet.add(card)
        }
        
      }
      
      draw = [...drawSet]
      firstMeaning = assignMeaning(firstMeaning, 0)
      console.log(firstMeaning)
      // console.log('test')
      setDeck(draw)
      // console.log(deck)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Welcome />
      <Draw handleSubmit={handleSubmit} deck={deck} firstMeaning={firstMeaning}/>
      
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
