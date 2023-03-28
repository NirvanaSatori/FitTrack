import React from 'react'
import { NavLink } from "react-router-dom";
// import { FcSportsMode } from "react-icons/fc";

function NavBar() {
  const linkStyles = {
    width: "150px",
    height: "40px",
    paddingTop: "14px",
    borderRadius: "8px",
    padding: "2px",
    alignItems: "center",
    margin: "0 6px 6px",
    background: "darkgreen",
    textDecoration: "none",
    color: "white",
    fontSize: "22px",
  };


  return (
    <>
    <div className='navbar'>
      {/* <h1> <FcSportsMode className='icon'/> FitTracker </h1> */}
      <NavLink to="/">
          <button className="button">Home</button>
        </NavLink>
        <NavLink to="/books">
          <button className="button">About Us</button>
        </NavLink>
        <NavLink to="/exercises">
          <button className="button">Exercises</button>
        </NavLink>
        <NavLink to="/food">
          <button className="button">Food</button>
        </NavLink>
        <NavLink to="/targets">
          <button className="button">Targets</button>
        </NavLink>
    
    </div>
    </>
  
  )
}

export default NavBar
