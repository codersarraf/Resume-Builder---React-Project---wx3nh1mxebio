import React from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <NavLink id="navbar">
        <Link className='nav-text' to="/">Home</Link>
        <Link className='nav-text' to="/resumebuilder">Resume Builder</Link>
        <Link className='nav-text' to="/aboutUs">AboutUs</Link>
     </NavLink>
    <Outlet/>
    </>
  )
}

export default Navbar