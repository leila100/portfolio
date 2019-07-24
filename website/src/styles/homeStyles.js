import styled from "styled-components";
import posed from "react-pose";

export const Header = styled.header`
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  line-height: 70px;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2.5rem;
  }
`;

export const About = styled.div`
  display: flex;
  /* margin-top: 50px; */
  font-family: "Playfair Display", serif;
  p {
    font-size: 2.5rem;
    text-align: left;
    margin-left: 7%;
    line-height: 1.8;
  }
  img {
    text-align: center;
    margin-top: 15px;
    width: 60%;
    height: 200px;
    border-radius: 30%;
  }
`;

export const Open = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});

export const Who = styled.div`
  font-size: 2.5rem;
`;
