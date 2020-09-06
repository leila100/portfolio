import React from "react";
import { Link } from "react-router-dom";

import {
  ProjectSection,
  Header,
  ProjectsWrapper,
  ProjectWrapper,
  Title,
  ProjImg,
  ProjDesc,
  Tech,
} from "./projectStyles";
import { Icons } from "../../styles/commonStyles";

import forgetMeNot from "../../assets/images/FMN_home.png";
import helloMelon from "../../assets/images/helloMelon_home.png";
import lambdamud from "../../assets/images/lambdamud.png";

const Projects = () => {
  return (
    <ProjectSection>
      <Header>Projects</Header>
      <ProjectsWrapper>
        {/* <Link to='/FMN'> */}
        <ProjectWrapper>
          <ProjImg src={forgetMeNot} alt='Forget Me Not - Home' />
          <Title>Forget Me Not</Title>
          <ProjDesc>
            Forget ME Not is an application that sends thoughtful messages, on your behalf, to people you know on their
            special day.
          </ProjDesc>
          <Tech>React - Node - Express - Sqlite3 - Sendgrid - SASS</Tech>
        </ProjectWrapper>
        {/* </Link> */}
        {/* <Link to='/helloMelon'> */}
        <ProjectWrapper>
          <ProjImg src={helloMelon} alt='Hello Melon - Home' />
          <Title>Hello Melon</Title>
          <ProjDesc>
            A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
            empower people to take control of their health.
          </ProjDesc>
          <Tech>React - GraphQL - Sqlite3 - Stripe</Tech>
        </ProjectWrapper>
        {/* </Link> */}
        <ProjectWrapper>
          {/* <Link to='/lambdaMUD'> */}
          <ProjImg src={lambdamud} alt='Lambda MUD - Home' />
          <Title>Lambda MUD</Title>
          <ProjDesc>
            A multiplayer real-time world combining maze traversing, and online chat. Players select their avatar, and
            then find their way to the door. Players can also interact with each other by using a chatroom.
          </ProjDesc>
          <Tech>React - Django - Sqlite3 - Pusher</Tech>
          {/* </Link> */}
        </ProjectWrapper>
      </ProjectsWrapper>
    </ProjectSection>
  );
};

export default Projects;
