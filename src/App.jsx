import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopGames from "./components/TopGames";
import Search from "./components/Search";
import Nav from "./components/Nav";
import GameDetail from "./components/GameDetail";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path='/topgames' element={<TopGames />} />
        <Route path='/search' element={<Search />} />
        <Route path='/game/:name' element={<GameDetail />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;