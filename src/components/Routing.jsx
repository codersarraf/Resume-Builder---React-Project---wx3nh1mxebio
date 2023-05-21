import React from 'react'
import Homepage from "./pages/Homepage";
import ResumeBuilder from "./pages/ResumeBuilder";
import About from "./pages/About";
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Routing() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/resumebuilder" element={<ResumeBuilder/>}/>
        <Route path="/aboutUs" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
