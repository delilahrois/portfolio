import React from 'react';
import Nav from '../Nav/Nav';
import './Projects.scss';

const Projects = () => {

  const directUser = (url) => {
    window.location.replace(url)
  }

  return (
    <>
      <Nav/>
      <div className="projects-container">
        <div className="project">
          <button onClick={() => directUser('https://delilahrois.github.io/fantasy-fellowship/')}>fantasy fellowship</button>

        </div>
        <div className="project">
          <button onClick={() => directUser('https://freetomorrow.netlify.app/')}>free tomorrow?</button>

        </div>
        <div className="project">
          <button onClick={() => directUser('https://github.com/delilahrois/under-a-tack')}>under a tack!</button>

        </div>
      </div>
    </>
  )
}

export default Projects;