import React, { useState, useEffect } from 'react';

import { IconContext } from 'react-icons/lib';
import { FaTimes, FaBars } from 'react-icons/fa';
import {
  NavItemBtn, NavBtnLink,
  NavMenu, NavItem, NavLinks, 
  Nav, NavbarContainer, NavLogo, Button, MobileIcon,
} from './styles';

function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ button, setButton ] = useState(true);
  const [ navbar, setNavbar ] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth < 960) setButton(false)
    else setButton(true);
  };

  useEffect(() => showButton(), []);

  window.addEventListener('resize', showButton);

  const changeNavbar = () => {
    if(window.scrollY >= 80) setNavbar(true)
    else setNavbar(false)
  }

  window.addEventListener('scroll', changeNavbar);

  return (
    <>
      <IconContext.Provider value={{color: '#FFF'}}>
        <Nav className={navbar ? 'active' : ''}>
          <NavbarContainer>
            <NavLogo to="/" className={navbar ? 'active' : ''} onClick={closeMobileMenu}>Healthy Food</NavLogo>

            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem><NavLinks to='/'>HEALTHY RECIPES</NavLinks></NavItem>
              <NavItem><NavLinks to='/blog'>BLOG</NavLinks></NavItem>
              <NavItem><NavLinks to='/join'>JOIN</NavLinks></NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sing-up">
                    <Button className={navbar ? 'active' : ''} >REGISTER</Button>
                  </NavBtnLink>
                ): (
                  <NavBtnLink to="/sing-up">
                    <Button fontBig primary>REGISTER</Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;