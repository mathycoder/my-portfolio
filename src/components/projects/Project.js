import React, { Component } from 'react'

class Project extends Component {
  state = {
    opaque: false
  }

  componentDidMount(){
    window.setTimeout( () => {
      this.setState({
        opaque: true
      })
    }, 50)
  }

  render(){
    const { project } = this.props
    const { opaque } = this.state
    return (
      <div className={`project ${ opaque ? 'fade-in': ''}`}>
        <h1>{project.title}</h1>
        <h6>{project.titleDescription}</h6>
        <div className="project-first-row">
          <div className="description-div">
            <p>{project.description}</p>
          </div>
          <div>
            <iframe
              title="video preview"
              id="video" type="text/html"
              src={project.demoUrl}
              frameBorder="0"
              allowFullScreen
              >
            </iframe>
          </div>
        </div>
        <div className="project-second-row">
          <div>
            <img
              alt={`${project.title} element`}
              className="project-media-image"
              src={project.appImage}/>
          </div>
          <div className="bulletpoints">
            <ul>
              {project.bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
            <a href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank">
              <img className="github-logo" src="/images/github.png" alt="github icon"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
