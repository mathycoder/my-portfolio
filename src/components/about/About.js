import React, { Component } from 'react'
import './about.css'

class About extends Component {
  render(){
    return (
      <div className="about">
        <div className="classroom-pic">
          <img
            alt="Adam teaching in a classroom"
            src="/images/classroom-pic2.png" />
        </div>
        <div className="bio">
          <div>
            {"I spent the past decade with whiteboard markers in my hands and a timer around my neck, teaching middle school students math in the Bronx.  Along the way, I developed a passion for education technology, and decided to pursue an ability to create greater educational tools."}
          </div>
          <div>
            {"After a few months exploring Python on Coursera, I fell in love with coding.  I was accepted with a scholarship to the Flatiron School.  Now I'm a Full stack web developer with experience in Ruby and JavaScript frameworks. "}
          </div>
        </div>
        <h2 className="tech-boxes-title">My Technologies</h2>
        <div className="tech-boxes">
          <div className="front-end tech-box">
            <h3>Front End</h3>
            <div className="techs">
              <img alt="react" src="/images-tech/react.jpg"/>
              <img alt="react-native" src="/images-tech/react-native.png"/>
              <img alt="redux" src="/images-tech/redux.png"/>
              <img alt="html5" src="/images-tech/html.png"/>
              <img alt="css3" src="/images-tech/css.png"/>
              <img alt="js" src="/images-tech/js.png"/>
              <img alt="es6" src="/images-tech/es6.jpg"/>
              <img alt="jquery" src="/images-tech/jQuery.png"/>
            </div>
          </div>

          <div className="back-end tech-box">
            <h3>Back End</h3>
            <div className="techs">
              <img alt="rails" src="/images-tech/rails.png"/>
              <img alt="sinatra" src="/images-tech/sinatra.jpeg"/>
              <img alt="ruby" src="/images-tech/ruby.png"/>
              <img alt="python" src="/images-tech/python.png"/>
              <img alt="sql" src="/images-tech/sql.png"/>
            </div>
          </div>
        </div>

        <div className="contact-me">
          <h2 className="contact-me-title">Connect With Me</h2>
        </div>
        <div className="contact-icons">
          <a
            rel="noopener noreferrer"
            href="https://github.com/mathycoder"
            target="_blank">
            <img alt="github" src="/images-icons/github.png"/>
          </a>
          <a href="mailto:adam.sarli@gmail.com">
            <img alt="gmail" src="/images-icons/gmail.png"/>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adam-sarli/"
            target="_blank">
            <img alt="linkedin" src="/images-icons/linkedin.png"/>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/Adam_Sarli"
            target="_blank">
            <img alt="twitter" src="/images-icons/twitter.png"/>
          </a>
        </div>
      </div>
    )
  }

}

export default About

// <div>
//   {"Teaching middle schoolers and educators mathematics gave me considerable experience creating and refining math curricula for my students, skills that translate into a problem solving process inherent to coding. After a decade of building and creating collaborative learning spaces, I'm excited to develop pedagogical tools to further help classrooms."}
// </div>
