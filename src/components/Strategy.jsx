import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Strategy = () => {
  const [games, setGames] = useState([]);


//   const apiKey = '3b2f386895764e1b8cefdc8aff052328';
  
  useEffect(() => {
    fetch('https://api.rawg.io/api/games?genres=strategy&key=3b2f386895764e1b8cefdc8aff052328')
      .then(response => response.json())
      .then(data => setGames(data.results));
  }, []);

  return (
    <div>
      <ul>
              {games.map(game => (
             <li key={game.id}>
             <Link to={`/game/${game.slug}`}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Strategy;