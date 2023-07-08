import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { useGlobalContext } from '../context';
import './Game.style.css';
import { Link } from 'react-router-dom';

function Game({ game }) {
  const { id, title, img, price, isShown, amount } = game;

  const { increaseAmount, decreaseAmount } = useGlobalContext();

  return (
    <article className={`game-item ${isShown ? '' : 'hidden'}`}>
      <h4 className="game-title">{title}</h4>
      <div>
        <Link to={`/games/${id}`}>
          <div className="div-img">
            <img className="thumb-img" src={img} alt="thumbnail-img" />
          </div>
        </Link>
        <div className="buy-area">
          <div className="price">{price}rub.</div>
          {amount !== 0 && (
            <div className="amount-div">
              <button className="chev-btn" onClick={() => decreaseAmount(id)}>
                <HiChevronDown />
              </button>
              {amount}
              <button className="chev-btn" onClick={() => increaseAmount(id)}>
                <HiChevronUp />
              </button>
            </div>
          )}
          <button
            disabled={amount !== 0}
            className={`buy-btn ${amount !== 0 && 'bought'}`}
            onClick={() => increaseAmount(id)}
          >
            {amount !== 0 ? 'in cart' : 'buy'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Game;
