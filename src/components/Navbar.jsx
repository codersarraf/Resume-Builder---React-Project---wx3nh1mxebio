import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav id="navbar">
        <NavLink className='nav-text' to="/">Home</NavLink>
        <NavLink className='nav-text' to="/resumebuilder">Resume Builder</NavLink>
        <NavLink className='nav-text' to="/aboutUs">AboutUs</NavLink>
     </nav>
    <Outlet/>
    </>
  )
}

export default Navbar