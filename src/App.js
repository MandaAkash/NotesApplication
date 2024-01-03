import React, { useState,useEffect } from 'react'

import {Route, Routes } from 'react-router-dom';
import Signin from './Signin'
import Main from './Main';
// import AddNote from './components/AddNote';

function App() {

  return (

    <div>
      <Routes>
          {/* <Route path="/login" element={<Signin />} /> */}
          <Route path="/" element={<Main/>}/>
           </Routes>
          
    </div>

  )
}

export default App
