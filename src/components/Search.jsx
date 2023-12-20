import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)
    let slug = searchTerm.split(' ').join('-').toLowerCase()


    const apiKey = '3b2f386895764e1b8cefdc8aff052328';

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}&key=${apiKey}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      return resp.json();
    })
    .then(({results}) => {
      console.log(results); 
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    .catch(error => {
      console.error('Error:', error);
    });
    setSearchTerm("")
  }

  return (
    <div className="game-search">
      <h1>Game Search</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <br></br>
          <input type="submit"/>
        </form>
        <Results gameResults={gameResults} />
    </div>
  );
}

export default Search;