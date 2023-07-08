import { useGlobalContext } from '../context';
import './Cart.style.css';
import CartGame from './CartGame';
import EmptyCart from './EmptyCart';

function Cart() {
  const { games, totalPrice, clearCart, totalAmount } = useGlobalContext();

  const gamesInCart = games.filter((game) => game.amount > 0);

  return (
    <section className="cart-wrapper">
      <div className="container">
        {totalAmount > 0 ? (
          <>
            <h2 className="cart-title">Games in your cart:</h2>
            <div className="games-in-cart">
              {gamesInCart.map((game) => {
                return <CartGame key={game.id} game={game} />;
              })}
            </div>
            <div className="games-in-cart-underline"></div>
            <div className="games-in-cart-total-wrapper">
              <h3>Total:</h3>
              <h4>{totalPrice} rubles </h4>
            </div>

            <div className="games-in-cart-btns-container">
              <button className="cart-btn games-in-cart-clear-all-btn" onClick={clearCart}>
                clear all
              </button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
}

export default Cart;
