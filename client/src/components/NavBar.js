import React from 'react'
import { NavLink } from "react-router-dom";

// import { FcSportsMode } from "react-icons/fc";

function NavBar() {
  

  return (
    <>
    <div className='navbar'>
      <h1> Fit<b className='tracker'>Track</b> </h1>
      <NavLink to="/home"  className="nav-link"style={{ textDecoration: 'none'}}>
          Home
        </NavLink>
        <NavLink to="/aboutus" className="nav-link" style={{ textDecoration: 'none' }}>
         About Us
        </NavLink>
        <NavLink to="/exercises"className="nav-link"style={{ textDecoration: 'none' }}>
          Exercises
        </NavLink>
        <NavLink to="/food" className="nav-link"style={{ textDecoration: 'none' }}>
         Food
        </NavLink>
        <NavLink to="/targets" className="nav-link"style={{ textDecoration: 'none' }}>
          Targets
        </NavLink>
        <NavLink to="/login" className="navlink"style={{ textDecoration: 'none' }}>
          Login
        </NavLink>
        <NavLink to="/register" className="navlink"style={{ textDecoration: 'none' }}>
        Register
        </NavLink>
    
    </div>
    </>
  
  )
}

export default NavBar
