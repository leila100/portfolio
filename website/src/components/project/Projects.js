import React from "react";

import { projects } from "../../data/projects/projectsInfo";
import Project from "./project";
import { ProjectsWrapper } from "../../styles/projectStyles";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        {projects.map((prj, index) => (
          <Project prj={prj} index={index} />
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
