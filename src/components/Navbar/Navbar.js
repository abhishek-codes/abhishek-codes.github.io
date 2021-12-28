import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll} from "react-scroll";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenu,
} from "./NavbarComponents";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
      scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Navlogo to='/' onClick={toggleHome}>Abhishek</Navlogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks to='about' 
                smooth={true} duration={500}
                spy={true} exact='true'
                offset={-60}>About</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="skills"
                smooth={true} duration={500}
                spy={true} exact='true'
                offset={-60}>Skills</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="work"
                smooth={true} duration={500}
                spy={true} exact='true'
                offset={-60}>Work Experience</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="contact"
                smooth={true} duration={500}
                spy={true} exact='true'
                offset={-60}>Contact Me</NavLinks>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
