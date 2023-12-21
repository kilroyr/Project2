import React, { useState, useEffect } from 'react';

const token = "patWA5A1G8BD4zrGr.b84c7ddd54a4addf16ce5977e30aa2ffaa13725e658d1745b38a1efba7ef961f";

const url = "https://api.airtable.com/v0/appX9nsIdl3q7371v/Wishlist";

export default function WishList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setGames(data.records);
    })();
  }, []);

  const handleRemove = async (game) => {
    const response = await fetch(`${url}/${game.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      setGames(games.filter((g) => g.id !== game.id));
    }
  };

  const handleCreate = async (game) => {
    const data = {
      fields: {
        Name: game.name,
        Description: game.description,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const newGame = await response.json();
    setGames([...games, newGame]);
  };

  return (
     <div className="wishlist">
      {games.map((game) => (
        <div className="game" key={game.id}>
          <h2>{game.fields.name}</h2>
          <p>{game.fields.description}</p>
          <img src={game.fields.image} alt={game.fields.name} />
          <button onClick={() => handleRemove(game)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
