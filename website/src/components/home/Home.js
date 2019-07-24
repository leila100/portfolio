import React, { useState } from "react";
import { PoseGroup } from "react-pose";

import { Header, About, Open, Who } from "../../styles/homeStyles";
import { Icons, Container } from "../../styles/commonStyles";
import leila from "../../assets/images/Leila.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Icons end>
        <i className='far fa-envelope' />
        <i className='fab fa-linkedin' />
        <i className='fab fa-github' />
      </Icons>
      <Header>
        <h1>LEILA BERROUAYEL</h1>
        <h2>WEB/SOFTWARE DEVELOPER</h2>
        <h3>Reliable . Committed . Dependable</h3>
        <Who onClick={handleOpen}>Who is Leila?</Who>
        <PoseGroup>
          {open && (
            <Open key='open'>
              <About>
                <img src={leila} alt='Leila_img' />
                <div>
                  <p>
                    Reliable, committed, and dependable Web/Software Developer with 2+ years working as a Teaching
                    Assistant while pursuing a Masters degree in Computer Science.
                  </p>
                  <p>
                    An additional 2+ years working in an oil company's IT team has helped develop communication, and
                    management skills necessary to succeed in a team environment.
                  </p>
                </div>
              </About>
            </Open>
          )}
        </PoseGroup>
      </Header>
    </Container>
  );
};

export default Home;
