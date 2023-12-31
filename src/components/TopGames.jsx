import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div className="top-games">
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
  )
}

export default TopGames;