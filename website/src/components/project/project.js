import React from "react";

import { ProjectWrapper } from "../../styles/projectStyles";
import { Icons } from "../../styles/commonStyles";

const Project = props => {
  return (
    <ProjectWrapper index={props.index}>
      <h1>{props.prj.title}</h1>
      <p>{props.prj.description}</p>
      <h2>{props.prj.tech}</h2>
      <Icons left>
        <a href={props.prj.link}>
          <i className='fas fa-eye' />
        </a>
        <a href={props.prj.githubLink}>
          <i className='fab fa-github' />
        </a>
      </Icons>
    </ProjectWrapper>
  );
};

export default Project;
