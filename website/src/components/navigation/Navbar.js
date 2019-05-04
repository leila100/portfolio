import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks, Nav, NavIntro, NavContact } from "../../styles/navigationStyles";
import leila from "../../assets/images/Leila.jpg";

const NavBar = () => {
  return (
    <Nav>
      <NavIntro>
        <NavLink exact to='/' activeClassName='activeNavButton'>
          <img src={leila} alt='Leila_img' />
          <h2>LEILA BERROUAYEL</h2>
        </NavLink>
      </NavIntro>
      <NavLinks>
        <NavLink to='/portfolio' activeClassName='activeNavButton'>
          <span>Portfolio</span>
        </NavLink>
        <NavLink to='/skills' activeClassName='activeNavButton'>
          <span>Skills</span>
        </NavLink>
        <NavLink to='/contact' activeClassName='activeNavButton'>
          <span>Contact Me</span>
        </NavLink>
      </NavLinks>
      <NavContact>
        <span>Get in Touch</span>
        <NavLinks>
          <span>Email</span>
          <span>LinkedIn</span>
          <span>Github</span>
        </NavLinks>
      </NavContact>
    </Nav>
  );
};

export default NavBar;
