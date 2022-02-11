import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className="home">
      <div className="home-txt-container">
        <h1>My name is Delilah and I'm a frontend software developer.</h1>
        <p>Curious about what I do?</p>
        <Link to="/about"><button className="enter-btn">E n t e r</button></Link>
      </div>
    </div>
  )
}

export default Home;