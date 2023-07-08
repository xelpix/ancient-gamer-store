import { Link } from 'react-router-dom';
import './Error.style.css';
import notFound from '../images/not-found-sh.png';

function Error() {
  return (
    <section>
      <div className="container">
        <div className="error-page-wrapper">
          <img src={notFound} alt="not found img" className="not-found-img" />
          <h2 className="error-title">404</h2>
          <p className="error-text">Page not found</p>
          <Link to="/games" className="back-to-games">
            back to games
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
