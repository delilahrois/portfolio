import './Home.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Nav/>
      <div className="home">
        <Link to="/about"><button className="homepg-nav-btn">About</button></Link>
        <Link to="/projects"><button className="homepg-nav-btn">Projects</button></Link>
        <Link to="/contact"><button className="homepg-nav-btn">Contact</button></Link>
      </div>
    </div>
  )
}

export default Home;