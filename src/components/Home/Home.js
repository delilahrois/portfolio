import './Home.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Nav/>
      <div className="home">
        <Link to="/about"><button className="homepg-nav-btn">about me</button></Link>
        <Link to="/projects"><button className="homepg-nav-btn">my work</button></Link>
        <Link to="/contact"><button className="homepg-nav-btn">let's connect</button></Link>
      </div>
    </div>
  )
}

export default Home;