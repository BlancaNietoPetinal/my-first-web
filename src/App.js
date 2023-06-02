import React, {Component, useEffect, useState} from 'react'
import NavBar from './NavBar.js'
import Home from './pages/Home.js'
import Plan from './pages/Plan.js'
import Antropometry from './pages/Antropometry.js'
import DataBase from './pages/DataBase.js'



function App() {
  const [sentence, setSentence] = useState('');
  useEffect( () => {
    fetch('/api').then( response => setSentence(response) )
  }, [])

  switch(window.location.pathname) {
    case '/':
      Component = Home
      break;
    case '/plan':
      Component = Plan
      break;
    case '/antropometry':
      Component = Antropometry
      break;
    case '/database':
      Component = DataBase
      break;
      }
  return (
    <>
      < NavBar />
      <div className='container'>
      < Component />
      </div>
    </>
  );
}

export default App;
