import React from "react";

import NavBar from "../navigation/Navbar";
import { Resume, Contact, Body, Column, Date } from "../../styles/resumeStyles";
import { Section, Icons, List, Techs, Tech } from "../../styles/commonStyles";
import resumePDF from "../../assets/images/Resume - Leila berrouayel.pdf";
import resumeImage from "../../assets/images/resume.png";

const resume = () => {
  return (
    <>
      <NavBar />
      <Resume>
        <h1>LEILA BERROUAYEL</h1>
        <h2>Web/Software Developer</h2>
        <a href={resumePDF} target='_blank' rel='noopener noreferrer'>
          <img src={resumeImage} alt="Leila's Resume" />
        </a>
        <Section>
          <p>
            Reliable, committed, and dependable Web/Software Developer with 2+ years working as a Teaching Assistant in
            a university's Computer Science Department while pursuing a Master's degree.{" "}
          </p>
          <p>
            An additional 2+ years working in an oil company's IT team developed communication, and management skills
            necessary to succeed in a team environment.
          </p>
        </Section>
        <hr />
        <Icons left>
          <Contact>
            <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
              <i className='far fa-envelope' />
            </a>
            <p>nb.leila10@gmail.com</p>
          </Contact>
          <Contact>
            <i className='fas fa-mobile-alt' />
            <p>832-452-4748</p>
          </Contact>
          <Contact>
            <i className='fas fa-map-marker-alt' />
            <p>Houston - Texas - United States.</p>
          </Contact>
          <Contact>
            <a href='http://leilaberrouayel.me' target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-laptop' />
            </a>
            <p>http://leilaberrouayel.me</p>
          </Contact>
          <Contact>
            <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin' />
            </a>
            <p>https://www.linkedin.com/in/leila-berrouayel/</p>
          </Contact>
          <Contact>
            <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </a>
            <p>https://github.com/leila100</p>
          </Contact>
        </Icons>
        <hr />
        <Body>
          <Column>
            <h2>Education</h2>
            <List>
              <h3>COMPUTER SCIENCE AND WEB DEVELOPMENT</h3>
              <h4>LAMBDA SCHOOL</h4>
              <Date>09/2018 – Present</Date>
              <ul>
                <li>
                  <p>
                    Lambda School is a 18+ months Computer Science & Software Engineering Academy that provides an
                    immersive hands-on curriculum with a focus on computer science, software engineering, and web
                    development.
                  </p>
                </li>
                <li>
                  <p>Approached all coding challenges using pair programming.</p>
                </li>
                <li>
                  <p>
                    Wrote production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on
                    the backend to build single page applications.
                  </p>
                </li>
                <li>
                  <p>Utilized agile software development and Git workflow on all projects.</p>
                </li>
                <li>
                  <p>Gained hands-on experience with client and server testing.</p>
                </li>
                <li>
                  <p>
                    Completed all curriculum course work including: React, Redux, Node, Express, Jest, Python, C, etc.
                  </p>
                </li>
              </ul>
            </List>
            <List>
              <h3>Master's in Computer Science</h3>
              <h4>UNIVERSITY OF HOUSTON</h4>
              <Date>1998 – 2001</Date>
              <ul>
                <li>
                  <p>
                    Master's Thesis - "An Object Oriented Subsystem for Learning Directions and their Relationships" -
                    Developed an object-oriented subsystem, part of a large learning program, using C++ in a team of
                    two.
                  </p>
                </li>
                <li>
                  <p>
                    Teaching Assistant - Supervised the assembly, and C programming course lab. Graded programming
                    assignments and tests. Provided help and assistance to students as needed.
                  </p>
                </li>
              </ul>
            </List>
            <h2>WORK EXPERIENCE</h2>
            <List>
              <h3>Systems Analyst</h3>
              <h4>ANADARKO PETROLEUM</h4>
              <Date>2002 – 2004</Date>
              <ul>
                <li>
                  <p>
                    Point of contact for customizing Documentum (Document Management Software) to fit user's needs -
                    Java - HTML.
                  </p>
                </li>
                <li>
                  <p>
                    Managed Employee Training (documentation and training manual) and Administration (provide accounts,
                    fix problems, help users with daily tasks) of StarTeam (team collaboration software).
                  </p>
                </li>
              </ul>
            </List>
          </Column>
          <Column>
            <h2>Skills</h2>
            <Techs>
              <Tech>Javascript</Tech>
              <Tech>React</Tech>
              <Tech>React Hooks</Tech>
              <Tech>Redux</Tech>
              <Tech>CSS</Tech>
              <Tech>HTML</Tech>
              <Tech>Node</Tech>
              <Tech>Express</Tech>
              <Tech>RESTful API </Tech>
              <Tech>GraphQL</Tech>
              <Tech>Django</Tech>
              <Tech>Python</Tech>
              <Tech>Testing - Jest</Tech>
            </Techs>
            <h2>PERSONAL PROJECTS</h2>
            <List>
              <h3>Lambda MUD (09/2019)</h3>
              <p>LambdaMUD is a multiplayer real-time world combining maze traversing, and online chat.</p>
              <ul>
                <li>
                  <p>
                    Players select their avatar, and then find their way to the door. Players can also interact with
                    each other by using a chatroom.
                  </p>
                </li>
                <li>
                  <p>
                    Took responsibility for the majority of the back end portion of the app, and rapidly and
                    successfully implemented new technology (Django - Pusher).
                  </p>
                </li>
                <li>
                  <p>This application was built by a remote team of 4 people. It took less than two weeks to build.</p>
                </li>
                <li>
                  <p>Tech: React - Django - SQLite - Sendgrid - Pusher - SASS - Styled Components.</p>
                </li>
                <li>
                  <p>
                    Application:{" "}
                    <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      https://lambda-mud7.netlify.com/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Code:{" "}
                    <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
                      https://github.com/LambdaMUD
                    </a>
                  </p>
                </li>
              </ul>
            </List>
            <List>
              <h3>Forget Me Not (09/2019)</h3>
              <p>
                Forget Me Not is an application that sends thoughtful messages, on your behalf, to people you know on
                their special day.
              </p>
              <ul>
                <li>
                  <p>Took responsibility for the majority of the back end portion of the app.</p>
                </li>
                <li>
                  <p>
                    Selected as a team lead for this project, managing and guiding a remote team of 5 (working mostly
                    nights) for about 2 weeks.
                  </p>
                </li>
                <li>
                  <p>Refactored code and added some technology (Redux for example) to create Forget Me Not.</p>
                </li>
                <li>
                  <p>Tech: React - React Hooks - Redux - Node - SQLite - Sendgrid - MaterialUI - Styled Components.</p>
                </li>
                <li>
                  <p>
                    Application:{" "}
                    <a href='https://forgetmenot.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      https://forgetmenot.netlify.com/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Code:{" "}
                    <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                      https://github.com/leila100/forgetMeNot
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Old application:
                    <a href='https://friends-reminder.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      https://friends-reminder.netlify.com/
                    </a>
                  </p>
                </li>
              </ul>
            </List>
            <List>
              <h3>Hello Melon (05/2019 – 07/2019)</h3>
              <p>
                Hello Melon is a simple, user friendly nutrition tracking application that provides a visualization of
                eating patterns and nutritional data to empower people to take control of their health.
              </p>
              <ul>
                <li>
                  <p>Took responsibility for major parts of backend and frontend, acting as a full stack developer.</p>
                </li>
                <li>
                  <p>Effectively communicating any setbacks and successes with team members.</p>
                </li>
                <li>
                  <p>Rapidly and successfully implemented a new technology (GraphQL) on the back end.</p>
                </li>
                <li>
                  <p>Collaborated as team of 6 to build application in 10 weeks</p>
                </li>
                <li>
                  <p>Tech: React - GraphQL - sqlite3 - Stripe - MaterialUI - Styled Components.</p>
                </li>
                <li>
                  <p>
                    Application:{" "}
                    <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      {" "}
                      https://hello-melon-lambda.netlify.com/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Code:{" "}
                    <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                      https://github.com/labspt3-nutrition-tracker
                    </a>
                  </p>
                </li>
              </ul>
            </List>
          </Column>
        </Body>
      </Resume>
    </>
  );
};

export default resume;
