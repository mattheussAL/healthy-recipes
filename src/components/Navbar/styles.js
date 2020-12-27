import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';

export const Nav = styled.nav`
  position: sticky;

  font-size: .9rem;
  font-weight: 300;

  top: 0;
  height: 80px;

  background: transparent;

  &.active {
    background: #87CD62;
    box-shadow: 0 0 10px #87CD62;
    transition: all .8s ease;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  height: 60px;

  display: flex;
  justify-content: space-between;

  ${Container}
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  justify-self: flex-start;

  color: #87CD62;

  &.active {
    color: #FFF;
    transition: all .8s ease;
  }

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: .5rem;
`;

export const Button = styled.button`
  font-size: ${(fontBig) => fontBig ? '16px' : '36px'};

  white-space: nowrap;
  padding: ${(big) => big ? '12px 20px' : '10px 20px'};

  color: #87CD62;

  background:  #FFF;
  border-radius: 4px;

  border: none;

  transform: scale(1);

  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #a6df43;
    transition: all .3s ease-out;
    box-shadow: 0 0 10px #87CD62;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    position: absolute;

    font-size: 1.8rem;
    top: 0;
    right: 0;

    display: block;

    transform: translate(-100%, 60%);
  }

  @media screen and (max-width: 770px) {
    position: fixed;
    margin-right: 20px;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  text-align: center;

  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    position: absolute;

    top: 80px;
    left: ${({click}) => (click ? 0 : '-120%')};
    width: 100%;
    height: 100vh;

    background: #87CD62;

    display: flex;
    flex-direction: column;

    opacity: 1;

    transition: all .5s ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover { border: none }
  }
`;

export const NavLinks = styled(Link)`
  height: 100%;
  padding: .5rem 1rem;

  display: flex;
  align-items: center;

  text-decoration: none;
  color: #FFF;
  transform: scale(1);

  &:hover{
    transform: scale(1.2);
    transition: all .5s ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 2rem;

    text-align: center;

    display: table;

    &:hover {
      color: #FFF;
      transition: all .3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavBtnLink = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 8px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
`;










