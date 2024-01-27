import React, { useState } from 'react';
import "./Navigation.scss";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [fixed, setFixed] = useState(false);

  function handleFixed() {
    const headerHeight = document.querySelector('.header')?.offsetHeight;
    const navigationHeight = document.querySelector('.navigation')?.offsetHeight;
    const totalHeight = (headerHeight + navigationHeight) ?? 150;

    if (window.scrollY >= totalHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener('scroll', handleFixed);
  return (
    <nav className={fixed ? 'navigation fixed-nav ' : 'navigation'}>
      <ul>
        <li>
          <Link to={`/`}>FM 24 Home</Link>
        </li>
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
    </nav>
  );
};

export default Navigation;