import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            qui quas omnis non fuga corporis hic eveniet ad mollitia! Quos
            error, consectetur nihil qui hic veniam velit. Quo, architecto.
            Ratione.
          </p>
          <Link to="register" className="btn register-link">
            Register
          </Link>
          <Link to="login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
