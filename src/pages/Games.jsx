import Genres from '../components/Genres';
import { useGlobalContext } from '../context';
import './Games.style.css';
import Game from './Game';
import { useEffect } from 'react';

function Games() {
  const { games } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Genres />
      <div className="container">
        <div className="section-center">
          {games.map((game) => {
            const { id } = game;
            return <Game key={id} game={game} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
