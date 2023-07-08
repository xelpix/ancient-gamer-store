import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Nav.style.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

import logo from '../images/logo-sh.png';

function Nav() {
  const { openSidebar, filterItems, totalAmount, isCartPage } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    filterItems('all');
  }, [navigate]);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content-wrapper">
          <button className="hamburger-btn" aria-label="open sidebar" onClick={openSidebar}>
            <GiHamburgerMenu />
          </button>

          <Link className="site-logo" to="/">
            <img src={logo} className="logo-svg" alt="logo-img" />
          </Link>

          <div className="nav-links">
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/games">
              Games
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>

          <NavLink
            className={({ isActive }) => (isActive ? 'cart-link active' : 'cart-link')}
            to="/cart"
            aria-label="open shopping cart"
          >
            <div className="cart-wrapper">
              <HiOutlineShoppingCart className="cart-icon" />
              {totalAmount > 0 && (
                <div className={`${isCartPage ? 'round-active' : 'cart-round'}`}>{totalAmount}</div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
