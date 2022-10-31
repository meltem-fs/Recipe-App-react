import React from 'react'
import meal from "../assets/bon.jpg"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const logOut = ()=>{
    localStorage.clear()
  }
  return (
    <div className="nav">
      <img src={meal} alt="bonappetit" />
      <div>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink onClick={logOut}
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className={({ isActive }) => (isActive ? "activeNavLink" : " ")}
          to="/"
        >
          Log Out
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar