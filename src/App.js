import './App.css';
import React, { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Draw from './components/Draw'
import Reading from './components/Reading'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Draw />
      <Reading />
      
    </div>
  );
}

export default App;
