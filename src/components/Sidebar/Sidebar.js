import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElemets";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" 
          smooth={true} duration={500}
          spy={true} exact='true'
          offset={-60} onClick={toggle}>About</SidebarLink>
          <SidebarLink 
          smooth={true} duration={500}
          spy={true} exact='true'
          offset={-60}
          to="skills" onClick={toggle}>Skills</SidebarLink>
          <SidebarLink 
          smooth={true} duration={500}
          spy={true} exact='true'
          offset={-60} to="work" onClick={toggle}>Work Experience</SidebarLink>
          <SidebarLink 
          smooth={true} duration={500}
          spy={true} exact='true'
          offset={-60} to="contact" onClick={toggle}>Contact Me</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
