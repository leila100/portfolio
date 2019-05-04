import React from "react";

import { Header, BG } from "../styles/headerStyles";
import hr1 from "../assets/images/hr1.png";
import backImage from "../assets/images/background.jpg";

const Home = () => {
  return (
    <>
      <Header>
        <h1>LEILA BERROUAYEL</h1>
        <h2>WEB/SOFTWARE DEVELOPER</h2>
        <p>Reliable - Committed - Dependable</p>
        <img src={hr1} alt='horizontal Line' />
      </Header>
      <BG src={backImage} className='bk' alt='bg' />
    </>
  );
};

export default Home;
