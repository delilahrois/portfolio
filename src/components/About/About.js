import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const About = () => {

  const directUser = () => {
    window.location.replace('https://www.turing.edu/')
  }

  return (
    <div>
      <Nav/>
      <div className="about">
        <img className="vermont-img" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Fall_foliage_Vermont_banner.jpg"></img>
        <div className="about-txt-container">
          <h1 className="subheader">Who I am</h1>
          <h2 className="dramatic">I grew up in the Green Mountains of Vermont.</h2>

          <p>My creative brain and giving nature led me to a life in the hospitality industry. There was a lot I loved about my life in the restaurant biz, but ultimately, I didn't find the fulfillment I was looking for. I knew my skills could be used to a greater potential, and I dreamed of a career with a deeper purpose. </p>
          
          <p>When Covid-19 came through and knocked down the restaurants, I felt it was finally time. After some exploration, I found my way to Codecademy and tried my first free lesson. I was hooked-- I knew I wanted to learn to program, and I knew I wanted to do it at <Link to="" onClick={() => directUser()}>Turing School of Software and Design</Link> in Denver.  </p>

          <p>It was my experience as a server and restaurant manager that made me the problem solver I am today. I loved the daily challenges that arose during service, real-world puzzles that are not so different from JavaScript code.</p>

          <p>I have found that my restaurant skills set me up for success as a software developer in ways I'd never considered. I have the ability to think clearly in times of acute stress-- you just try carrying 6 plates or drinks in two hands while managing a packed house, a crashing POS system, a kitchen that's running behind and a line out the door-- and with all those years of direct customer care, I have a deep understanding of the needs of humans and what makes them tick. </p>

          <p>Along with my softer skills, I bring technical know-how to a team, including exposure to...</p>

            <div className="skills-container">
              <h1 className="skills">frontend </h1>
              <p className="skills-list">JavaScript | React.js | Router | Cypress | HTML | CSS | Sass | Mocha | Chai | Redux </p>
              <h1 className="skills">backend</h1>
              <p className="skills-list">Express.js | Node.js | PostgreSQL | Knex.js </p>
              <h1></h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;