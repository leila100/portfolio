import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks, Nav, NavIntro, NavContact } from "../../styles/navigationStyles";
import Fade from "react-reveal/Fade";

const NavBar = () => {
  return (
    <Nav>
      <Fade bottom delay={200}>
        <NavLink to='/'>
          <i className='fas fa-user-circle' />
        </NavLink>
      </Fade>
      <Fade bottom delay={400}>
        <NavLink to='/projects'>
          <i className='fas fa-briefcase' />
        </NavLink>
      </Fade>
      <Fade bottom delay={600}>
        <NavLink to='/resume'>
          <i className='far fa-file' />
        </NavLink>
      </Fade>
    </Nav>
  );
};

export default NavBar;
