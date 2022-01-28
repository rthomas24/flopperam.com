import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarConatiner, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = () => {
  return(
      <>
        <Nav>
            <NavbarConatiner>
                <NavLogo to="'/">
                    flop
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavLogo>
            </NavbarConatiner>
        </Nav>
      </>
  ); 
};

export default Navbar;
