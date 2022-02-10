import React from 'react';
import './About.scss';

const About = () => {

  return (
    <div className="about">
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFOKegR7q7G2g/profile-displayphoto-shrink_800_800/0/1633904939929?e=1649894400&v=beta&t=lVXVGdPfljgVUaWLBjz6mkg767eyZ_Toj21Kl-P2HrE" alt="self-portrait" className="self-portrait"></img>
      <div className="about-txt-container">
        <h1>I never imagined I'd find myself in code.</h1>
      </div>
    </div>
  )
}

export default About;