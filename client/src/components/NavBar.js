import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FcSportsMode } from 'react-icons/fc';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>
          Fit<b className="navbar__logo-tracker">Track</b>
        </h1>
        <FcSportsMode size={40} />
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/home"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/targets"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Targets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercises"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Exercises
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            Food
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className="navbar__link"
            activeClassName="navbar__link--active"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="navbar__button"
            activeClassName="navbar__button--active"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="navbar__button"
            activeClassName="navbar__button--active"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
