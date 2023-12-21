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
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.fields.name}</h2>
          <p>{game.fields.description}</p>
        </div>
      ))}
    </div>
  );
}

