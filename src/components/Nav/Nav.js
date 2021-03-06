import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  // const location = useLocation().pathname;

  // if(location === '/home') {
  //   return (
  //     <header className="header">
  //       <div className="header-name-container">
  //       <Link to="/"><h1>Delilah Rose</h1></Link>
  //       <h2>software developer</h2>
  //       </div>
  //       <div className="header-nav-container">
        
  //       </div>
  //     </header>
  //   )
  // } else {
    return (
      <header className="header">
        <div className="header-name-container">
          <Link to="/"><h1>Delilah Rose</h1></Link>
          <h2>software developer</h2>
        </div>
        <div className="header-nav-container">
          <Link to="/projects"><p>my work</p></Link>
          <Link to="/about"><p>about me</p></Link>
          <Link to="/contact"><p>let's connect</p></Link>
        </div>
      </header>
    )
  }
// }

export default Nav;