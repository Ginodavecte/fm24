import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from './layout/Header';
import Overview from './components/Overview';
import PlayerPersonalities from './components/player_personalities/PlayerPersonalities';
import ScrollToAnchor from './components/ScrollToAnchor';
import Scouts from './components/Staff/Scouts/Scouts'
import Coaches from './components/Staff/Coaches/Coaches';
import Navigation from './components/Navigation/Navigation';


function App() {

  return (
    <Router>
      <Header />
      <Navigation />
      <div className="container">
      <ScrollToAnchor />
        <Routes>
          <Route
            path="/"
            exact
            element={<Overview />}
          />

          <Route
            path="/player-personalities"
            exact
            element={<PlayerPersonalities />}
          />

          <Route
            path="/scouts"
            exact
            element={<Scouts />}
          />

          <Route
            path="/coaches"
            exact
            element={<Coaches />}
          />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
