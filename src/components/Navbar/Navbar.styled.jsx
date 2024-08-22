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
  background: #3d1c6e;
  border-bottom: 1px solid rgba(0,0,0,.6);
  box-shadow: 0 0 20px rgba(0,0,0,.4);
`;

const Henk = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3d1c6e;
  box-shadow: 0 0 20px rgba(0,0,0,.4);
  border-bottom: 1px solid rgba(0,0,0,.6);
  padding: 16px;
  position: relative;
  @media (max-width: ${md}px) {
    flex-direction: column;
    padding: 1rem;
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
  color: white;

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
  color: white;
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