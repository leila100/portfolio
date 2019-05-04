import React from "react";

import { Header, About } from "../styles/headerStyles";
import { BG, Icons } from "../styles/commonStyles";
import backImage from "../assets/images/background.jpg";

const Home = () => {
  return (
    <>
      <Icons end>
        <i className='far fa-envelope' />
        <i className='fab fa-linkedin' />
        <i className='fab fa-github' />
      </Icons>
      <Header>
        <h1>LEILA BERROUAYEL</h1>
        <h2>WEB/SOFTWARE DEVELOPER</h2>
        <p>Reliable - Committed - Dependable</p>
        <About>
          <p>Developed communication, and time management skills from 2+ years working in a team.</p>
          <p>Always going the extra mile, making a project better than requested.</p>
        </About>
      </Header>
      <BG src={backImage} alt='bg' />
    </>
  );
};

export default Home;
