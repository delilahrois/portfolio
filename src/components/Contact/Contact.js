import React from 'react';
import './Contact.scss';
import Nav from '../Nav/Nav';

const Contact = () => {


  return (
    <>
      <Nav/>
      <div className="contact">
      <h1 className="contact-header">Let's connect!</h1>
      <div className="contact-info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"></img><p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </div>
    </>
  )
}

export default Contact;