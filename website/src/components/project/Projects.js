import React from "react";

import { projects } from "../../data/projects/projectsInfo";
import Project from "./project";
import { ProjectsWrapper } from "../../styles/projectStyles";
import backImage from "../../assets/images/background2.png";
import { BG, Icons } from "../../styles/headerStyles";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        {projects.map((prj, index) => (
          <Project prj={prj} index={index} />
        ))}
      </ProjectsWrapper>
      <BG src={backImage} className='bk' alt='bg' />
    </>
  );
};

export default Projects;
