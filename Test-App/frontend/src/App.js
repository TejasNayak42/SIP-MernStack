import NavBar from './Components/NavBar';
import Home from './Components/Home';
// import React, { useRef } from 'react';
// import { BrowserRouter } from "react-router-dom";

// import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  
  </>
  
  );
}

export default App;
