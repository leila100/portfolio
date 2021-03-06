import React from "react";
import Zoom from "react-reveal/Zoom";

import { HomeSection, Container, Header, HomeButton } from "./homeStyles";
import resume from "../../assets/images/Resume - Leila Berrouayel.pdf";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Header>
          <h1 className='heading'>LEILA BERROUAYEL</h1>
          <h2 className='subHeading'>
            Web Developer -<br />
            Software Engineer
          </h2>
          <h3>JavaScript, React, Node, GraphQL, Python, Sqlite - Agile Enthusiast</h3>
          <Zoom>
            <HomeButton>
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </HomeButton>
          </Zoom>
        </Header>
      </Container>
    </HomeSection>
  );
};

export default Home;
