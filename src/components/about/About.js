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
      </div>
    )
  }

}

export default About

// <div>
//   {"Teaching middle schoolers and educators mathematics gave me considerable experience creating and refining math curricula for my students, skills that translate into a problem solving process inherent to coding. After a decade of building and creating collaborative learning spaces, I'm excited to develop pedagogical tools to further help classrooms."}
// </div>
