import React, { useState } from 'react';
import "./Navigation.scss";
import { Link } from 'react-router-dom';
import {ReactComponent as FM24LogoSticky} from './header-logo-desktop-sticky-fm21.svg';

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
        <li className="sticky-logo">
          <Link to={`/`}><FM24LogoSticky /></Link>
        </li>
        <li>
          <Link to={`/player-personalities`}>Karakters</Link>
        </li>
        <li>
          <Link to={`/scouts`}>Scouts</Link>
        </li>
        <li>
          <Link to={`/coaches`}>Coaches</Link>
        </li>
        <li>
          <Link to={`/traits`}>Traits</Link>
        </li>
        <li>
          <Link to={`/references`}>References</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;