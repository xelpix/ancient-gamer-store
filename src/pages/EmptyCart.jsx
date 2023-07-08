import { Link } from 'react-router-dom';
import './EmptyCart.style.css';
import emptyCart from '../images/empty-cart-sh.png';

function EmptyCart() {
  return (
    <>
      <div className="container">
        <div className="empty-cart-wrapper">
          <img src={emptyCart} alt="empty cart img" className="empty-cart-img" />
          <h2>Your cart is empty</h2>
          <Link to="/games" className="back-to-games">
            choose games
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
