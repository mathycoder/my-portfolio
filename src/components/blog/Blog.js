import React, { Component } from 'react'
import './blog.css'

class Blog extends Component {
  render(){
    return (
      <div className="blog">
        <div className="blog-bubble">
          <div>For now, my blog is hosted here:</div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mathycoder.github.io/">
            A Teacher Learns to Code
            </a>
          </div>
        </div>
      </div>
    )
  }

}

export default Blog
