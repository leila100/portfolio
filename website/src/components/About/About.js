import React from "react";

import { AboutSection, Descriptions, Description, Title, Text } from "./aboutStyles";

const About = () => {
  return (
    <AboutSection>
      <Descriptions>
        <Description>
          <Title>Web Developer</Title>
          <Text>
            Joined Lambda School, a Computer Science & Software Engineering online Academy that provides an immersive
            hands-on curriculum with a focus on computer science, software engineering, and web development.
          </Text>
        </Description>
        <Description>
          <Title>Skills</Title>
          <Text>
            Wrote production-ready code using ReactJS, Redux, and CSS on the front-end and NodeJS and Express, or Python
            on the back-end to build single page applications.
          </Text>
        </Description>
        <Description>
          <Title>Agile Methodology</Title>
          <Text>
            Lambda School courses utilize the Agile methodology. They are all divided into sprints, with stand-ups
            meetings and a sprint challenge at the end of each sprint.
          </Text>
        </Description>
      </Descriptions>
    </AboutSection>
  );
};

export default About;
