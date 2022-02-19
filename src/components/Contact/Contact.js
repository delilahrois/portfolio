import React from 'react';
import './Contact.scss';
import Nav from '../Nav/Nav';

const Contact = () => {


  return (
    <>
      <Nav/>
      <div className="contact">
      <h1 className="contact-header">let's connect!</h1>
      <div className="contact-info">
        <img className="email-icon" src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" onClick={() => window.location.replace('mailto:delilahrosedev@gmail.com')}></img>
        <p>delilahrosedev@gmail.com</p>
      </div>
      <div className="contact-icons">
        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="linkedin-icon" onClick={() => window.location.replace('https://www.linkedin.com/in/delilahrose/')}></img>
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdlWlkUUhX6DU1WSry5k4JGra5-6vMfIxHg&usqp=CAU" alt="github-icon" onClick={() => window.location.replace('https://github.com/delilahrois')}></img>
      </div>
    </div>
    </>
  )
}

export default Contact;