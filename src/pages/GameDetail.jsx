import { useGlobalContext } from '../context';
import { Link, useParams } from 'react-router-dom';
import './GameDetail.style.css';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import Error from './Error';

function GameDetail() {
  const { games, increaseAmount, decreaseAmount } = useGlobalContext();
  const { gameId } = useParams();
  const [value, setValue] = useState(0);

  const game = games.find((game) => game.id === parseInt(gameId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!game) {
    return <Error />;
  }

  const allScreens = [game.img, ...game.screenshots];

  return (
    <section className="game-detail-section">
      <div className="container">
        <Link className="back-to-games-btn" relative="path" to="..">
          ← games
        </Link>
        <div className="game-detail-wrapper">
          <div className="game-detail-left-side">
            <h2 className="game-detail-title">{game.title}</h2>
            <div className="game-detail-img-div-wrapper">
              <img className="game-detail-img" src={allScreens[value]} alt="game poster" />
            </div>
            <div className="screenshots-container">
              {allScreens.map((screen, index) => {
                return (
                  <div key={index} onClick={() => setValue(index)} className="screenshot-wrapper">
                    <img className="screenshot-img" src={screen} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="game-detail-right-side">
            <div className="year-rating-wrapper">
              <p className="game-detail-year">📅 {game.year}</p>
              <p className="game-detail-rating">⭐ {game.rating}</p>
            </div>
            <p className="game-detail-description">{game.description}</p>
            <div className="game-detail-buy-area">
              <div className="price">{game.price}rub.</div>
              {game.amount !== 0 && (
                <div className="amount-div">
                  <button className="chev-btn" onClick={() => decreaseAmount(game.id)}>
                    <HiChevronDown />
                  </button>
                  {game.amount}
                  <button className="chev-btn" onClick={() => increaseAmount(game.id)}>
                    <HiChevronUp />
                  </button>
                </div>
              )}
              <button
                disabled={game.amount !== 0}
                className={`buy-btn ${game.amount !== 0 && 'bought'}`}
                onClick={() => increaseAmount(game.id)}
              >
                {game.amount !== 0 ? 'in cart' : 'buy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameDetail;
