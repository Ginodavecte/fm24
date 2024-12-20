import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const md = 768;

const LogoImg = styled.img`
  align-self: start;
  cursor: pointer;
  border-radius: 0;  
`;

const NavbarWrapper = styled.nav`
  background: var(--fmThemePurpleColor);
  border-bottom: var(--fmThemePurpleBorder);
  box-shadow: var(--fmThemePurpleBoxShadow);
`;

const Henk = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--fmThemePurpleColor);
  border-bottom: var(--fmThemePurpleBorder);
  padding: 16px;
  position: relative;
  @media (max-width: ${md}px) {
    flex-direction: column;
    padding: 1rem;
  }
  .active {
    color: var(--fmThemeOrangeColor) !important;
  }
`;

const NavLinkWrapper = styled.div`
  @media (max-width: ${md}px) {
    display: ${(props) => (props.active ? "block" : "none")};
    text-align: center;
    padding-top: 2rem ;
    margin-bottom: -1rem;
    transition: all 0.35s ease;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: var(--colorText);

  &:not(:first-child) {
    margin-left: 2rem;
  }

  @media (max-width: ${md}px) {
    display: block;
    font-size: 20px;
    &:not(:first-child) {
      margin: 2rem auto;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 20px;
  top: 21px;
  color: var(--colorText);
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: ${md}px){
    display: block;
  };
`;

export {
  LogoImg,
  NavbarWrapper,
  Henk,
  NavLinkWrapper,
  StyledNavLink,
  StyledFontAwesomeIcon,
};