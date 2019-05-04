import React from "react";

import { Header, BG, Icons } from "../styles/headerStyles";
import backImage from "../assets/images/background.jpg";

const Home = () => {
  return (
    <>
      <Icons>
        <i className='far fa-envelope' />
        <i className='fab fa-linkedin' />
        <i className='fab fa-github' />
      </Icons>
      <Header>
        <h1>LEILA BERROUAYEL</h1>
        <h2>WEB/SOFTWARE DEVELOPER</h2>
        <p>Reliable - Committed - Dependable</p>
      </Header>
      <BG src={backImage} className='bk' alt='bg' />
    </>
  );
};

export default Home;
