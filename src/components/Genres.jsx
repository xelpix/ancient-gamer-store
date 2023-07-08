import { useState } from 'react';
import { useGlobalContext } from '../context';
import './Genres.style.css';

function Genres() {
  const [value, setValue] = useState(0);

  const { genres, filterItems } = useGlobalContext();

  return (
    <div className="btn-container">
      {genres.map((genre, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === value && 'active-btn'}`}
            key={index}
            onClick={() => {
              setValue(index);
              filterItems(genre);
            }}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}

export default Genres;
