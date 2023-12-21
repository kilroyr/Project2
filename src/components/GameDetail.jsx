import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [games, setGames] = useState([]);
  const url = 'https://api.airtable.com/v0/appX9nsIdl3q7371v/Wishlist';
  const token = 'patWA5A1G8BD4zrGr.b84c7ddd54a4addf16ce5977e30aa2ffaa13725e658d1745b38a1efba7ef961f';

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${slug}?key=3b2f386895764e1b8cefdc8aff052328`)
      .then(response => response.json())
      .then(data => {
        setGame(data);
      });
  }, [slug]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setGames(data.records);
  };

  const handleAddToWishlist = async (game) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fields: {
          name: game.name,
          description: game.description,
          image: game.background_image,
        },
      }),
    });

    const newGame = await response.json();
    setGames([...games, newGame]);
  };

  if (!game) return <div>Loading...</div>;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description}</p>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <p>Metacritic: {game.metacritic}</p>
      <a href={game.website}>Official Website</a>
      <button onClick={() => handleAddToWishlist(game)}>Add to Wishlist</button>
    </div>
  );
};

export default GameDetail;