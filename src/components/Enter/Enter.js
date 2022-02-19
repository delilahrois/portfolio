import React from 'react';
import './Enter.scss';
import { Link } from 'react-router-dom';

const Enter = () => {


  return (
    <div className="enter">
      <div className="enter-txt-container">
        <h1>my name is Delilah and I'm a frontend software developer</h1>
        <p>curious about what I do?</p>
        <Link to="/home"><button className="enter-btn">e n t e r</button></Link>
      </div>
    </div>
  )
}

export default Enter;