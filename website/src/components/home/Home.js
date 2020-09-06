import React from "react";

import { HomeSection, Container, Header } from "./homeStyles";

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
        </Header>
      </Container>
    </HomeSection>
  );
};

export default Home;
