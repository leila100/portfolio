import React from "react";

import { NavIcons } from "./navStyles";

const IconsNav = () => {
  return (
    <NavIcons right>
      <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
        <i className='far fa-envelope' />
      </a>
      <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin' />
      </a>
      <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github' />
      </a>
    </NavIcons>
  );
};

export default IconsNav;
