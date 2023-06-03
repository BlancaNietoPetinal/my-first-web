import React, {useEffect, useState} from 'react'
import NavBar from './NavBar.js'
import Home from './pages/Home.js'
import Plan from './pages/Plan.js'
import Antropometry from './pages/Antropometry.js'
import DataBase from './pages/DataBase.js'



function App() {
  let component
  // const [sentence, setSentence] = useState('');
  // useEffect( () => {
  //   fetch('/').then( response => setSentence(response) )
  // }, [])

  switch(window.location.pathname) {
    case '/':
      component = <Home/>
      break;
    case '/plan':
      component = <Plan/>
      break;
    case '/antropometry':
      component = <Antropometry/>
      break;
    case '/database':
      component = <DataBase/>
      break;
  }
  return (
    <>
      < NavBar />
      <div className='container'>
      {component}
      </div>
    </>
  );
}

export default App;
