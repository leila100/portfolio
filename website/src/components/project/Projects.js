import React from "react";

import {
  ProjectSection,
  Header,
  ProjectsWrapper,
  ProjectWrapper,
  Title,
  ProjImg,
  ProjDesc,
  Tech,
  ProjIcons,
  ProjButton,
} from "./projectStyles";

import forgetMeNot from "../../assets/images/FMN_home.png";
import helloMelon from "../../assets/images/helloMelon_home.png";
import lambdamud from "../../assets/images/lambdamud.png";

const Projects = () => {
  return (
    <ProjectSection>
      <Header>Projects</Header>
      <ProjectsWrapper>
        <ProjectWrapper>
          <ProjImg src={forgetMeNot} alt='Forget Me Not - Home' />
          <Title>Forget Me Not</Title>
          <ProjDesc>
            Forget Me Not is an application that sends thoughtful messages, on your behalf, to people you know on their
            special day. Never forget an important day or occasion anymore.
          </ProjDesc>
          <Tech>React - Node - Express - Sqlite3 - Sendgrid - SASS</Tech>
          <ProjIcons>
            <ProjButton>
              <a href='https://forgetmenot.netlify.com' target='_blank' rel='noopener noreferrer'>
                Link
              </a>
            </ProjButton>
            <ProjButton>
              <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                Front-end code
              </a>
            </ProjButton>
            <ProjButton>
              <a href='https://github.com/leila100/FMN_BE' target='_blank' rel='noopener noreferrer'>
                Back-end code
              </a>
            </ProjButton>
          </ProjIcons>
        </ProjectWrapper>
        <ProjectWrapper>
          <ProjImg src={helloMelon} alt='Hello Melon - Home' />
          <Title>Hello Melon</Title>
          <ProjDesc>
            A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
            empower people to take control of their health.
          </ProjDesc>
          <Tech>React - GraphQL - Sqlite3 - Stripe</Tech>
          <ProjIcons>
            <ProjButton>
              <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                Link
              </a>
            </ProjButton>
            <ProjButton>
              <a href='https://www.youtube.com/watch?v=yAJ2viGBuEo' target='_blank' rel='noopener noreferrer'>
                Demo
              </a>
            </ProjButton>
            <ProjButton>
              <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                CODE
              </a>
            </ProjButton>
          </ProjIcons>
        </ProjectWrapper>
        <ProjectWrapper third>
          <ProjImg src={lambdamud} alt='Lambda MUD - Home' />
          <Title>Lambda MUD</Title>
          <ProjDesc>
            A multiplayer real-time world combining maze traversing, and online chat. Players select their avatar, and
            then find their way to the door. Players can also interact with each other by using a chatroom.
          </ProjDesc>
          <Tech>React - Django - Sqlite3 - Pusher</Tech>
          <ProjIcons>
            <ProjButton>
              <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
                Link
              </a>
            </ProjButton>
            <ProjButton>
              <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
                CODE
              </a>
            </ProjButton>
          </ProjIcons>{" "}
        </ProjectWrapper>
      </ProjectsWrapper>
    </ProjectSection>
  );
};

export default Projects;
