import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Overview from './components/Overview';
import PlayerPersonalities from './components/player_personalities/PlayerPersonalities';
import ScrollToAnchor from './components/ScrollToAnchor';
import Scouts from './components/Staff/Scouts/Scouts'
import Coaches from './components/Staff/Coaches/Coaches';
import Traits from './components/Traits/Traits';
import References from './components/References/References';
import { Navbar } from './components/Navbar/Navbar';
import Physios from './components/Staff/Physios/Physios';
import Footer from './layout/Footer'


function App() {

  return (
    <Router>
      <Navbar />
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

          <Route
            path="/fysios"
            exact
            element={<Physios />}
          />

          <Route
            path="/traits"
            exact
            element={<Traits />}
          />

          <Route
            path="/references"
            exact
            element={<References />}
          />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
