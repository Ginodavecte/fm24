import React from "react";
import { LogoImg } from "./Navbar.styled";
import logoLarge from "./header-logo-desktop-large-fm21.svg";
import logoSmall from "./header-logo-desktop-sticky-fm21.svg";

export const Logo = ( {fixed} ) => {
  const handleClick = () => {
    window.location.href = '/';
  };

  if(fixed){
    return <LogoImg src={logoSmall} alt="logo" onClick={handleClick} />;
  } else {
    return <LogoImg src={logoLarge} alt  ="logo" onClick={handleClick} />;
  }
};
