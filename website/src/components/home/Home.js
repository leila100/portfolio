import React, { useState } from "react";
// import Fade from "react-reveal/Fade";
// import HeadShake from "react-reveal/HeadShake";

import { HomeSection, Container, Header } from "../../styles/homeStyles";
// import leila from "../../assets/images/Leila.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HomeSection>
      <Container>
        <Header>
          <h1 className='heading'>LEILA BERROUAYEL</h1>
          <h2 className='subHeading'>
            Web Developer -<br />
            Software Engineer
          </h2>
        </Header>
      </Container>
    </HomeSection>
  );
};

export default Home;
