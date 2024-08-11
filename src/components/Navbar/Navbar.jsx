import React, { useEffect, useState } from 'react'
import { Logo } from "./Logo";
import {
  NavLinkWrapper,
  Henk,
  NavbarWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
} from "./Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import db from "../../database/db.json";
import "./Navbar.scss";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [links, setLinks] = useState([]);
  const [fixed, setFixed] = useState(false);

  const retrieveLinks = async () => {
    try {
      return setLinks(db.internalLinks);
    } catch (error) {
      console.error('Error fetching internal links:', error);
    }
  };

  useEffect(() => {
    retrieveLinks();
  }, []);

  function handleFixed() {
    const headerHeight = document.querySelector('.header')?.offsetHeight;

    if (window.scrollY >= headerHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener('scroll', handleFixed);

  return (
    <NavbarWrapper className={fixed ? 'header fixed-nav ' : 'header'}>
      <Henk className="container">
        <Logo fixed={fixed} />
        <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
        <NavLinkWrapper active={active} onClick={() => setActive(!active)}>
          {links.map((link) => (
            <StyledNavLink
              activeclassname="active"
              key={link.page}
              to={link.href}
            >
              {link.page}
            </StyledNavLink>
          ))}
        </NavLinkWrapper>
        {fixed && (<div className="extra-div-flexbox-balance"></div>)}
      </Henk>
    </NavbarWrapper>
  );
};