import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  // const apiKey = '3b2f386895764e1b8cefdc8aff052328';
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=3b2f386895764e1b8cefdc8aff052328`)
      .then(response => response.json())
      .then(data => setGame(data));
  }, [slug]);

  if (!game) return <div>Loading...</div>;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description}</p>
    </div>
  );
};

export default GameDetail;