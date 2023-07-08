import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { useGlobalContext } from '../context';
import './CartGame.style.css';
import { Link } from 'react-router-dom';

function CartGame({ game }) {
  const { decreaseAmount, increaseAmount } = useGlobalContext();

  return (
    <div key={game.id} className="game-in-cart">
      <Link to={`/games/${game.id}`}>
        <div className="game-in-cart-img-wrapper">
          <img className="game-in-cart-img" src={game.img} alt="poster img" />
        </div>
      </Link>
      <div className="game-in-cart-title-price-wrapper">
        <h3 className="game-in-cart-title">{game.title}</h3>
        <p className="game-in-cart-price">{game.price}rub.</p>
      </div>
      <div className="game-in-cart-amount">
        <button className="chev-btn cart-chev" onClick={() => decreaseAmount(game.id)}>
          <HiChevronDown />
        </button>
        {game.amount}
        <button className="chev-btn cart-chev" onClick={() => increaseAmount(game.id)}>
          <HiChevronUp />
        </button>
      </div>
    </div>
  );
}

export default CartGame;
