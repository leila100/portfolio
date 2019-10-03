import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "../../styles/navigationStyles";
import Fade from "react-reveal/Fade";

const NavBar = props => {
  const open = () => {
    if (props.handleOpen) props.handleOpen();
  };
  return (
    <Nav>
      <Fade bottom delay={200}>
        <NavLink exact to='/'>
          <i className='fas fa-user-circle' title='About' onClick={open} /> <div>ABOUT</div>
        </NavLink>
      </Fade>
      <Fade bottom delay={400}>
        <NavLink to='/projects'>
          <i className='fas fa-briefcase' title='Projects' /> <div>PROJECTS</div>
        </NavLink>
      </Fade>
      <Fade bottom delay={600}>
        <NavLink to='/resume'>
          <i className='far fa-file' title='Resume' /> <div>RESUME</div>
        </NavLink>
      </Fade>
    </Nav>
  );
};

export default NavBar;
