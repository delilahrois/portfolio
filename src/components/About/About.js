import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav';

const About = () => {

  return (
    <>
      <Nav/>
      <div className="about">

        <div className="skills-container">
          <h1 className="skills">Skills </h1>
          <p className="skills-list">JavaScript | React.js | Router | Redux | Cypress | HTML5 | CSS3 | Sass | </p>
        </div>
        <img className="vermont-img" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Fall_foliage_Vermont_banner.jpg"></img>
        <div className="about-txt-container">
          <h1 className="subheader">Who I am</h1>
          <p className="dramatic">I've always been a creator.</p>

          <p>I grew up in the Green Mountains of Vermont. My passion for creativity and giving nature eventually led me to the hospitality industry, where I quickly found myself in a management position at a popular, fast-paced eatery in downtown Portland, Maine.</p>

          <p>It was this experience that gave me a keen attention to detail, calm under pressure and knack for creative problem solving. I loved to solve the daily challenges that arose during service. I was content in the industry for a time, but something was missing. I knew that I wanted to be able to contribute in a more meaningful way to the world around me.</p>

          <p>I have found that my skills in hospitality set me up for success to the software industry. I have the ability to think clearly in situations of high stress; with so many years of direct customer care, I have a deep understanding of the needs of humans. </p>

          <h1 className="subheader">Where I'm going</h1>
          <p>I am currently seeking a role that will allow me to flex my creative problem solving muscles and be part of a dynamic team of thinkers, doers and lifelong learners! I am eager to begin working on a project that will better the lives of humans and the world around us.</p>
        </div>
      </div>
    </>
  )
}

export default About;