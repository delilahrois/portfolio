import React from 'react';
import Nav from '../Nav/Nav';
import './Projects.scss';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <>
      <Nav/>
      <div className="projects-container">
        <div className="project">
          <Link to="https://delilahrois.github.io/fantasy-fellowship/">Fantasy Fellowship</Link>

        </div>
        <div className="project">
          <Link to="https://freetomorrow.netlify.app/">Free Tomorrow?</Link>

        </div>
        <div className="project">
          <Link to="https://github.com/delilahrois/under-a-tack">Under A Tack!</Link>

        </div>
      </div>
    </>
  )
}

export default Projects;