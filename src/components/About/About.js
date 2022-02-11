import React from 'react';
import './About.scss';
import Nav from '../Nav/Nav';

const About = () => {

  return (
    <>
      <Nav/>
      <div className="about">
      {/* <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFOKegR7q7G2g/profile-displayphoto-shrink_800_800/0/1633904939929?e=1649894400&v=beta&t=lVXVGdPfljgVUaWLBjz6mkg767eyZ_Toj21Kl-P2HrE" alt="self-portrait" className="self-portrait"></img> */}
      <div className="about-txt-container">
        <h1>I am a person.</h1>
        <p>Here is some info about me.</p>
      </div>
    </div>
    </>
  )
}

export default About;