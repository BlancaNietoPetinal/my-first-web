import React, {useEffect, useState} from 'react'
import NavBar from './NavBar.js'
import Home from './pages/Home.js'
import Plan from './pages/Plan.js'
import Antropometry from './pages/Antropometry.js'
import DataBase from './pages/DataBase.js'
import LogIn from './pages/LogIn.js'
import SignUp from './pages/SignUp.js'
import Logged from './pages/Logged.js'
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <>
      < NavBar />
      <div className='container'>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/plan" element={<Plan/>}/>
          <Route path ="/antropometry" element={<Antropometry/>}/>
          <Route path ="/database" element={<DataBase/>}/>
          <Route path ="/login" element={<LogIn/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/logged" element={<Logged/>}/>

        </Routes>
      </div>
    </>
  );
}

export default App;
