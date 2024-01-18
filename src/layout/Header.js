import React from "react";
import {ReactComponent as FM24Logo} from './header-logo-desktop-large-fm21.svg';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title container">
        <FM24Logo className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
