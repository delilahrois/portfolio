import React from 'react';
import './Contact.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Contact = () => {


  return (
    <>
      <Nav/>
      <div className="contact">
      <h1 className="contact-header">Let's connect!</h1>
      <div className="contact-info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="linkedin-icon" onClick={() => window.location.replace('https://www.linkedin.com/in/delilahrose/')}></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdlWlkUUhX6DU1WSry5k4JGra5-6vMfIxHg&usqp=CAU" alt="github-icon" onClick={() => window.location.replace('https://github.com/delilahrois')}></img>
      </div>
    </div>
    </>
  )
}

export default Contact;