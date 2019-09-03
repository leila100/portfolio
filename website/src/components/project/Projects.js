import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { ProjectsWrapper, ProjectWrapper } from "../../styles/projectStyles";
import { Icons } from "../../styles/commonStyles";
import NavBar from "../navigation/Navbar";
import helloMelon from "../../assets/images/helloMelon_home.png";
import forgetMeNot from "../../assets/images/FMN_home.png";
import oerBookr from "../../assets/images/OERBookr_home.png";

const Projects = () => {
  return (
    <>
      <NavBar />
      <ProjectsWrapper>
        <Fade right duration={1200} delay={500}>
          <ProjectWrapper>
            <Link to='/helloMelon'>
              <h1>Hello Melon</h1>
              <img src={helloMelon} alt='Hello Melon - Home' />
              <p>
                A nutrition tracking application that provides a visualization of eating patterns and nutritional data
                to empower people to take control of their health.
              </p>
            </Link>
            <Icons left>
              <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-eye' />
              </a>
              <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github' />
              </a>
            </Icons>
          </ProjectWrapper>
        </Fade>
        <Fade left duration={1200} delay={1000}>
          <ProjectWrapper>
            <Link to='/FMN'>
              <h1>Forget Me Not</h1>
              <img src={forgetMeNot} alt='Forget Me Not - Home' />
              <p>
                Forget ME Not is an application that sends thoughtful messages, on your behalf, to people you know on
                their special day.
              </p>
            </Link>
            <Icons left>
              <a href='https://forgetmenot.netlify.com/' target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-eye' />
              </a>
              <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github' />
              </a>
            </Icons>
          </ProjectWrapper>
        </Fade>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
