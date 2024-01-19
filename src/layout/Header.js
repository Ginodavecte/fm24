import React from "react";
import {ReactComponent as FM24Logo} from './header-logo-desktop-large-fm21.svg';
import "./Header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title container">
        <Link to="/" >
          <FM24Logo className="header__logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
