import React from 'react'
import { NavLink } from "react-router-dom";
// import { FcSportsMode } from "react-icons/fc";

function NavBar() {
  

  return (
    <>
    <div className='navbar'>
      <h1> Fit<b className='tracker'>Track</b> </h1>
      <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/aboutus">
         About Us
        </NavLink>
        <NavLink to="/exercises">
          Exercises
        </NavLink>
        <NavLink to="/food">
         Food
        </NavLink>
        <NavLink to="/targets">
          Targets
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
        <NavLink to="/register">
        Register
        </NavLink>
    
    </div>
    </>
  
  )
}

export default NavBar
