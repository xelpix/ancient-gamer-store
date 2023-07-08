import './Footer.style.css';
import { socialIcons } from '../socialIcons';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer">
      <div className="icons-container">
        {socialIcons.map((icon, index) => {
          return (
            <li key={index}>
              <a href={icon.link}>{icon.icon}</a>
            </li>
          );
        })}
      </div>
      <div>{year} &copy; All rights reserved.</div>
    </footer>
  );
}

export default Footer;
