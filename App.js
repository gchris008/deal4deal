

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import OnlyDealer from './components/OnlyDealer';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/auth">Auth</Link></li>
            <li><Link to="/dealer">Only Dealer</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dealer" element={<OnlyDealer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;