import React from "react";

import { Icons } from "../../styles/commonStyles";

const IconsNav = () => {
  return (
    <Icons right>
      <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
        <i className='far fa-envelope' />
      </a>
      <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin' />
      </a>
      <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github' />
      </a>
    </Icons>
  );
};

export default IconsNav;
