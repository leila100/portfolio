import React from "react";
import Swing from "react-reveal/Swing";

import { NavIcons } from "./navStyles";

const IconsNav = () => {
  return (
    <NavIcons right>
      <Swing forever duration={2000} delay={1000}>
        <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
          <i className='far fa-envelope' />
        </a>
      </Swing>
      <Swing forever duration={2000} delay={1000}>
        <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin' />
        </a>
      </Swing>
      <Swing forever duration={2000} delay={1000}>
        <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github' />
        </a>
      </Swing>
      <Swing forever duration={2000} delay={1000}>
        <a href='https://twitter.com/nb_leila' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter' />
        </a>
      </Swing>
    </NavIcons>
  );
};

export default IconsNav;
