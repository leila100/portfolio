import styled from "styled-components";
import backgroundImage from "../assets/images/background.jpg";

export const HomeSection = styled.section`
  background-position: center;
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  /* background-image: linear-gradient(to right, #2f88d6, #515cde); */
  background: url(${backgroundImage});
  background-size: cover;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Header = styled.div`
  max-width: 50%;
  color: white;
  .heading {
    font-size: 6.5rem;
    font-weight: 700;
    letter-spacing: -2px;
  }
  .subHeading {
    color: #9acff6;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 10%;
  }
  p {
    font-size: 2rem;
    line-height: 1.6;
    margin: 2% 0;
    font-family: "Open Sans", sans-serif;
  }

  @media (max-width: 800px) {
    line-height: 50px;
    h1 {
      font-size: 4.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export const About = styled.div`
  display: flex;
  margin-top: 10px;
  font-family: "Playfair Display", serif;
  padding: 20px;
  p {
    font-size: 2.2rem;
    text-align: left;
    margin-left: 7%;
    line-height: 1.8;
    margin-top: 10px;
  }
  img {
    text-align: center;
    margin-top: 15px;
    width: 60%;
    height: 200px;
    border-radius: 30%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    img {
      width: 30%;
      margin-bottom: 10px;
    }
    p {
      margin-left: 0;
      font-size: 1.8rem;
      line-height: 2;
    }
  }
`;

export const Who = styled.div`
  font-size: 2.5rem;
  margin-top: 10px;
  cursor: pointer;
  i {
    margin-right: 2%;
    font-size: 3rem;
  }
`;
