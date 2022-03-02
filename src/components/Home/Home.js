import './Home.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Nav/>
      <div className="home">
       <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFOKegR7q7G2g/profile-displayphoto-shrink_400_400/0/1633904939929?e=1651708800&v=beta&t=gmglTwUzndI6oaiccUHkbW5aW7NRmkbU6fC66n-alHI" className="selfie" alt="photo of Delilah"></img>
       <div className="home-text">
        <h2>Welcome!</h2>
        <p>I am a passionate, empathetic software engineer with a background in hospitality management. </p>

        <p>I love to flex my creative problem solving muscles and be part of a dynamic team of thinkers, doers and lifelong learners! I am eager to begin working on projects that will better the lives of humans and the world around us.</p>

        <p>I'm passionate about sustainability, equity and inclusion. I believe we are entering a new age of tech and am excited to see more diversity in this space. I hope to use my skills as a developer to make a positive impact, whether environmental, social, or economic. If you think I'd be a good fit for your team, please don't hesitate to <Link to="/contact">reach out.</Link></p>
       </div>
      </div>
    </div>
  )
}

export default Home;