import React, { Component } from 'react'
import './NavBar.css'
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <div><NavLink to='/' id="about-link">Adam Sarli</NavLink></div>
        <NavLink to='/about' id="about-link">About</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/blog' id="blog-link">Blog</NavLink>
      </div>
    )
  }

}

export default NavBar
