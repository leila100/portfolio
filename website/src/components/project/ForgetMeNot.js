import React from "react";

import NavBar from "../navigation/Navbar";
import forgetMeNot from "../../assets/images/FMN_home.png";
import FMN_message from "../../assets/images/FMN_message.png";
import FMN_message1 from "../../assets/images/FMN_message1.png";
import messages1 from "../../assets/images/FMN_messages1.png";
import messages from "../../assets/images/FMN_messages.png";
import message2 from "../../assets/images/FMN_message2.png";
import message3 from "../../assets/images/FMN_message3.png";
import { ProjDescriptionWrapper, Images } from "../../styles/projectStyles";
import { Section, List, Techs, Tech } from "../../styles/commonStyles";

const HelloLemon = () => {
  return (
    <ProjDescriptionWrapper>
      <NavBar />
      <h1>Welcome to Forget Me Not</h1>
      <h2>Never forget a special day!</h2>
      <img src={forgetMeNot} alt='Forget ME Not - Home' />
      <List>
        <h2>Links</h2>
        <ul>
          <li>
            <a href='https://forgetmenot.netlify.com/' target='_blank' rel='noopener noreferrer'>
              <h3>Application - https://forgetmenot.netlify.com/</h3>
            </a>
          </li>
          <li>
            <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
              <h3>Github (Front End) - https://github.com/leila100/forgetMeNot</h3>
            </a>
          </li>
          <li>
            <a href='https://github.com/leila100/FMN_BE' target='_blank' rel='noopener noreferrer'>
              <h3>Github (Back End) - https://github.com/leila100/FMN_BE</h3>
            </a>
          </li>
        </ul>
      </List>
      <Section>
        <h2>Overview</h2>
        <p>
          Forget Me Not is an application that sends thoughtful messages, on your behalf, to people you know on their
          special day.
        </p>
      </Section>
      <Section>
        <h2>Team</h2>
        <p>
          This application was built initially during a build week by a remote team of 5, it was called BETTER FRIENDS
          REMINDERS. I was responsible for the back end portion. I was also taking the role of the team lead. It took
          about 2 weeks to build (working mostly nights){" "}
          <a href='https://friends-reminder.netlify.com/' target='_blank' rel='noopener noreferrer'>
            <span>(Link to app page )</span>
          </a>
          .
        </p>
        <p>For this project, Forget Me Not, I added some technology (Redux for example), and refactored the code.</p>
      </Section>
      <List>
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Schedule an email to be sent on a specific day and time.</h3>
            <p>
              Select a day, and time for your email to be sent. Write a thoughtful message text, select a category for
              your message (family, friend, work, or other), choose the appropriate date and time, and hit the schedule
              button. The message will be automatically sent on that day and time and you will have made someone happy
              on their special day.
            </p>
            <Images>
              <a
                href={FMN_message}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={FMN_message} alt='forget Me Not - new message' />
              </a>
              <a
                href={FMN_message1}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={FMN_message1} alt='forget Me Not - new message' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Access all scheduled messages</h3>
            <p>See all your messages. Filter by sent messages, and also by the different categories.</p>
            <Images>
              <a
                href={messages1}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={messages1} alt='Forget Me Not - New Messages' />
              </a>
              <a
                href={messages}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={messages} alt='Forget Me Not - New Messages' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Update/Delete a scheduled message</h3>
            <p>
              Selecting an existing (not yet sent) message, you can edit it. You can also delete it by selecting the
              trashcan icon.
            </p>
            <Images>
              <a
                href={message2}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={message2} alt='Forget Me Not - update Message' />
              </a>
              <a
                href={message3}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={message3} alt='Forget Me Not - Update Message' />
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
            React Hooks
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Redux
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Node
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3
          </Tech>
          <Tech data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Sendgrid
          </Tech>
          <Tech data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Full Calendar
          </Tech>
          <Tech data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            MaterialUI
          </Tech>
          <Tech data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
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
              person and never assuming that everyone has the same information.
            </p>
            <p>
              Being the team lead for this project, I had a hard time keeping the communication going between the two
              front-end developers. They had difficulties finding time for each other, to divide work, and talk about
              the many functionalities the application needed to have.
            </p>
          </li>
          <li>
            <h3>Division of work</h3>
            <p>
              Being the only back-end developer, my work was well defined from the beginning, this is why I chose to act
              as the team lead.
            </p>
            <p>
              The team had two UI developers, responsible for creating the landing page. The team had also two front-end
              developers, responsible for the user facing part of the application.
            </p>
          </li>
          <li>
            <h3>Taking new responsibilities</h3>
            <p>
              Being the only back-end developer meant that I was responsible for all the data formating and
              availability. It was a lot of stress but also a good challenge.
            </p>
            <p>
              Since I was the team lead, I had to keep the team talking and schedule multiple meetings to guide the
              team, and gather all that was still needed to be done, making sure to finish the project on time.
            </p>
          </li>
        </ul>
      </List>
    </ProjDescriptionWrapper>
  );
};

export default HelloLemon;
