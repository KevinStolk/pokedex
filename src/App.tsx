import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonInfoPage from './components/PokemonInfoPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:pokemonName' element={<PokemonInfoPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
