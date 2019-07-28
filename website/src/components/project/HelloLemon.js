import React from "react";

import NavBar from "../navigation/Navbar";
import helloMelon from "../../assets/images/helloMelon_home.png";
import dashboard from "../../assets/images/helloMelon_Dashboard.png";
import dashboard2 from "../../assets/images/helloMelon_Dashboard2.png";
import reports from "../../assets/images/helloMelon_reports.png";
import reports2 from "../../assets/images/helloMelon_reports2.png";
import coach from "../../assets/images/helloMelon_coach.png";
import coach2 from "../../assets/images/helloMelon_coach2.png";
import { HelloMelonWrapper, Section, List, Techs, Tech, Images } from "../../styles/helloMelonStyles";

const HelloLemon = () => {
  return (
    <HelloMelonWrapper>
      <NavBar />
      <h1>Welcome to Hello Melon</h1>
      <h2>Take control of your health</h2>
      <img src={helloMelon} alt='Hello Melon - Home' />
      <List>
        <h2>Links</h2>
        <ul>
          <li>
            <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
              <h3>Application - https://hello-melon-lambda.netlify.com/</h3>
            </a>
          </li>
          <li>
            <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
              <h3>Github - https://github.com/labspt3-nutrition-tracker</h3>
            </a>
          </li>
        </ul>
      </List>
      <Section>
        <h2>Overview</h2>
        <p>
          A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
          empower people to take control of their health.
        </p>
      </Section>
      <Section>
        <h2>Team</h2>
        <p>
          This application was built by a team of 6 (then 4) people managed and guided by Lambda School's Team Leads. It
          took about 10 weeks to build (working mostly nights).
        </p>
      </Section>
      <List>
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Keep track of daily food intake and exercises (workouts)</h3>
            <p>
              Save your food choices using the search of an integrated food database (connected to a food database API)
              or create your own entry. You can even choose foods from popular brands and restaurants. Enter also your
              daily workout.
            </p>
            <Images>
              <a
                href={dashboard}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={dashboard} alt='Hello Melon - Dashboard' />
              </a>
              <a
                href={dashboard2}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={dashboard2} alt='Hello Melon - Dashboard' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Access custom reports</h3>
            <p>
              See your progress with our customer reports. Whether your goal is to keep track of your nutrients or just
              a calory count, we have it all for you. You can also download a pdf report to share.
            </p>
            <Images>
              <a
                href={reports}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={reports} alt='Hello Melon - Reports' />
              </a>
              <a
                href={reports2}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={reports2} alt='Hello Melon - Reports' />
              </a>
            </Images>
          </li>
          <li>
            <h3>Get a coach to follow you</h3>
            <p>
              Whether you want a friend or your personal trainer to see your progress or keep you accountable, our coach
              feature allows you to communicate your progress easily.
            </p>
            <Images>
              <a
                href={coach}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={coach} alt='Hello Melon - Reports' />
              </a>
              <a
                href={coach2}
                target='_blank'
                rel='noopener noreferrer'
                data-aos='fade-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              >
                <img src={coach2} alt='Hello Melon - Reports' />
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
            Graphql
          </Tech>
          <Tech data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3
          </Tech>
          <Tech data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            strip
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
              This team communicated very well and were able to overcome obstacles, like loosing team members and
              learning new technology.
            </p>
          </li>
          <li>
            <h3>Division of work</h3>
            <p>
              Teams that work well together understand the strengths and weaknesses of each team member. Because we have
              never worked together before, it was hard to divide the work. We used a Trello board, and We relied on
              volunteering.
            </p>
            <p>Thankfully, all team members were eager to take on the work even if the tasks were challenging.</p>
          </li>
          <li>
            <h3>Learning new Technology</h3>
            <p>
              Learning a new technology in a limited time is challenging, but we knew we wanted to use a technology none
              of us ever used before.{" "}
            </p>
            <p>
              Once we've chosen the technology (Graphql), we made sure that everybody felt comfortable learning it,
              using it, and can handle any difficulties implementing it. We did that by communicating, pair codding, and
              fixing problems together.
            </p>
          </li>
        </ul>
      </List>
    </HelloMelonWrapper>
  );
};

export default HelloLemon;
