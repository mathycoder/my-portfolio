import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './homePage.css'

class HomePage extends Component {
  render(){
    return (
      <div className="home-page">
        <div className="left">
          <h1>Adam Sarli</h1>
          <h2>Full Stack Developer</h2>
          <h2>Lifelong Educator</h2>
          <h3><NavLink to="/projects">View My Projects!</NavLink></h3>
        </div>
        <img src="/images/homepage-pic2.png" alt="Adam hiking"/>
      </div>
    )
  }

}

export default HomePage
