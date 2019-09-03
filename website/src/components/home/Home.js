import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";

import { Header, About, Who } from "../../styles/homeStyles";
import { Container } from "../../styles/commonStyles";
import leila from "../../assets/images/Leila.jpg";
import NavBar from "../navigation/Navbar";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Header>
        <h1>LEILA BERROUAYEL</h1>
        <h2>WEB/SOFTWARE DEVELOPER</h2>
        <h3>Reliable . Committed . Dependable</h3>
        <Who onClick={handleOpen}>
          {!open ? (
            <HeadShake forever duration={2000} delay={500}>
              <i className='fas fa-caret-right' />
            </HeadShake>
          ) : (
            <i className='fas fa-caret-down' />
          )}
          Who is Leila?
        </Who>
        <Fade collapse when={open} duration={1000}>
          <About>
            <img src={leila} alt='Leila_img' />
            <Fade bottom cascade when={open} duration={1200}>
              <div>
                <p>
                  Web/Software Developer with 2+ years working as a Teaching Assistant while pursuing a Master's degree
                  in Computer Science.
                </p>
                <p>
                  An additional 2+ years working in an oil company's IT team has helped develop communication, and
                  management skills necessary to succeed in a team environment.
                </p>
              </div>
            </Fade>
          </About>
        </Fade>
        <NavBar />
      </Header>
    </Container>
  );
};

export default Home;
