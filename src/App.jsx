import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopGames from "./components/TopGames";
import Search from "./components/Search";
import Nav from "./components/Nav";
import GameDetail from "./components/GameDetail";
import Action from "./components/Action";
import Strategy from "./components/Strategy";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/topgames' element={<TopGames />} />
          <Route path='/action' element={<Action />} />
          <Route path='/strategy' element={<Strategy />} />
          <Route path='/search' element={<Search />} />
          <Route path='/game/:slug' element={<GameDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;