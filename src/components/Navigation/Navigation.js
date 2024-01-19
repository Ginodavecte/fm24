import React from 'react';
import "./Navigation.scss";
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to={`/player-personalities`}>Speler Persoonlijkheden</Link>
        </li>
        <li>
          <Link to={`/scouts`}>Scouts</Link>
        </li>
        <li>
          <Link to={`/coaches`}>Coaches</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;