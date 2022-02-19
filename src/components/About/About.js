import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav';

const About = () => {

  return (
    <div>
      <Nav/>
      <div className="about">

        <div className="skills-container">
          <h1 className="skills">Skills </h1>
          <p className="skills-list">JavaScript | React.js | Router | Cypress | HTML | CSS | Sass | Mocha | Chai | Express </p>
          <p className="skills-learning">Currently Learning...</p>
          <p className="skills-learning">Redux | TypeScript | PostgreSQL </p>
        </div>
        <img className="vermont-img" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Fall_foliage_Vermont_banner.jpg"></img>
        <div className="about-txt-container">
          <h1 className="subheader">Who I am</h1>
          <p className="dramatic">I've always been a creator.</p>

          <p>I grew up in the Green Mountains of Vermont. My passion for creativity and giving nature led me to a life in the hospitality industry. After the pandemic hit, I began to question everything. Eventually I found my way to Codecademy and tried my first free lesson. After that, I was hooked-- I knew I wanted to learn to program, and I knew I wanted to do it at Turing School of Software and Design in Denver.  </p>

          <p>It was my experience as a server and restaurant manager that made me the problem solver I am today. I loved the daily challenges that arose during service, real-world puzzles that are not so different from JavaScript code.</p>

          <p>I have found that my restaurant skills set me up for success as a software developer in ways I'd never considered. I have the ability to think clearly in times of acute stress-- you just try carrying 6 plates or drinks in two hands while managing a packed house, a crashing POS system, a kitchen that's running behind and a line out the door-- and with all those years of direct customer care, I have a deep understanding of the needs of humans and what makes them tick. </p>

          <h1 className="subheader">Where I'm going</h1>
          <p>I am currently seeking a role that will allow me to flex my creative problem solving muscles and be part of a dynamic team of thinkers, doers and lifelong learners! I am eager to begin working on a project that will better the lives of humans and the world around us.</p>

          <p>I am passionate about sustainability, equity and inclusion. I believe we are entering a new age of tech and am excited to see more diversity in this space. I hope to use my skills as a developer to make a positive impact, whether environmental, social, or economic.</p>
        </div>
      </div>
    </div>
  )
}

export default About;