import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <header className="header">
      <div className="header-name-container">
        <h1>Delilah Rose</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="header-nav-container">
        <Link to="/projects"><p>Projects</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      </div>
    </header>
  )

}

export default Nav;