import React from 'react';
import Nav from '../Nav/Nav';
import './Projects.scss';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <>
      <Nav/>
      <div className="projects">
        <Link>Fantasy Fellowship</Link>
        <Link>Free Tomorrow?</Link>
        <Link>Under A Tack!</Link>
      </div>
    </>
  )
}

export default Projects;