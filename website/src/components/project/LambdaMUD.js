import React from "react";

import { ProjDescriptionWrapper, Images } from "../../styles/projectStyles";
import { Section, List, Techs, Tech } from "../../styles/commonStyles";
import NavBar from "../navigation/Navbar";
import lambdamud from "../../assets/images/lambdamud.png";
import maze from "../../assets/images/maze.png";
import directions from "../../assets/images/directions.png";
import avatar from "../../assets/images/avatars.png";
import maze_avatar from "../../assets/images/maze_avatar.png";
import leila_chat from "../../assets/images/leila_chat.png";
import player1_chat from "../../assets/images/player1_chat.png";

const LambdaMUD = () => {
  return (
    <ProjDescriptionWrapper>
      <NavBar />
      <h1>Welcome to Lambda MUD</h1>
      <h2>Find your way!</h2>
      <img src={lambdamud} alt='Hello Melon - Home' />
      <List>
        <h2>Links</h2>
        <ul>
          <li>
            <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
              <h3>Application - https://lambda-mud7.netlify.com/</h3>
            </a>
          </li>
          <li>
            <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
              <h3>Github - https://github.com/LambdaMUD</h3>
            </a>
          </li>
        </ul>
      </List>
      <Section>
        <h2>Overview</h2>
        <p>
          Lambda MUD is a multiplayer real-time world combining maze traversing, and online chat. Players select their
          avatar, and then find their way to the door. Players can also interact with each other by using a chatroom.
        </p>
        <p>
          We designed, coded, and delivered a production level web application for people wanting to have fun solving a
          maze.
        </p>
        <p>We focused on making a simple, user friendly application with an intuitive, and fun user experience.</p>
      </Section>
      <Section>
        <h2>Team</h2>
        <p>Built from scratch in less than two weeks along with four other developers in an Agile environment.</p>
      </Section>
      <List>
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Maze </h3>
            <p>
              A maze is created allowing the user to have fun solving it by choosing a route to the exit door. To move,
              the user can either use the arrows provided or use the W A S D keys on the keyboard.
            </p>
            <Images>
              <a
                href={maze}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={maze} alt='Hello Melon - Dashboard' />
              </a>
              <a
                href={directions}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={directions} alt='Hello Melon - Dashboard' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Choose your avatar</h3>
            <p>A collection of user characters are available. Select the one you prefer or try them all.</p>
            <Images>
              <a
                href={avatar}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={avatar} alt='Hello Melon - Dashboard' />
              </a>
              <a
                href={maze_avatar}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={maze_avatar} alt='Hello Melon - Dashboard' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Chat with other players</h3>
            <p>Have a conversation with other players using the chatroom provided.</p>
            <Images>
              <a
                href={leila_chat}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={leila_chat} alt='Hello Melon - Dashboard' />
              </a>
              <a
                href={player1_chat}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={player1_chat} alt='Hello Melon - Dashboard' />
              </a>
            </Images>
          </li>
        </ul>
      </List>
      <Section>
        <h2>Technologies used</h2>
        <Techs>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            React
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Django
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3
          </Tech>
          <Tech data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Pusher
          </Tech>
          <Tech data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            SASS
          </Tech>
          <Tech data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Styled Components
          </Tech>
        </Techs>
      </Section>
      <List>
        <h2>Challenges</h2>
        <ul>
          <li>
            <h3>Communication</h3>
            <p>
              Effective communication is the most important part of teamwork and involves consistently updating each
              person on their progress.
            </p>
            <p>
              The team had communication problems that got resolved after feedback from team leads in Lambda School.
            </p>
          </li>
          <li>
            <h3>Division of work</h3>
            <p>Used a Trello board to divide and communicate the feature currently being built.</p>
          </li>
          <li>
            <h3>Learning new Technology</h3>
            <p>
              Learning a new technology in a limited time is challenging, but we were required to use Django and Pusher.
            </p>
            <p>
              Learned Django in about two days and built the BE required functionality from scratch. Implemented Pusher,
              on the last day of the project, to add chatting capabilities to the application.
            </p>
          </li>
        </ul>
      </List>
    </ProjDescriptionWrapper>
  );
};

export default LambdaMUD;
