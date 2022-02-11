import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav';

const About = () => {

  return (
    <>
      <Nav/>
      <div className="about">

        <div className="about-txt-container">
          <h1 className="skills">S k i l l s </h1>
          <p className="skills-list">JavaScript | React.js | Router | Redux | Cypress | HTML5 | CSS3 | Sass | </p>
          <p></p>


          <p>I've always been a creator.</p>

          <p>As a child I was active in the arts-- theatre, dance, music, drawing, language. In adulthood, my passion for creativity and giving nature led me to the hospitality industry, where I quickly found myself in a management position at a popular, fast-paced eatery in downtown Portland, Maine.</p>

          <p>It was this experience that gave me a keen attention to detail, calm under pressure and knack for creative problem solving. I was content in the industry for a time, but something was missing in my life. I knew I wanted more.</p>

          <h1>Where I'm going</h1>
          <p>I am currently seeking a role that will allow me to flex my creative problem solving muscles and be part of a dynamic team of thinkers, doers and lifelong learners! I am eager to begin working on a project that will better the lives of humans and the world around us.</p>
        </div>
      </div>
    </>
  )
}

export default About;