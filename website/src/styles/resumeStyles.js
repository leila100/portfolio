import styled from "styled-components";

export const Resume = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  line-height: 55px;
  font-family: "Open Sans", sans-serif;
  h1 {
    font-family: "Playfair Display", serif;
    font-size: 4rem;
    margin-top: 50px;
  }
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  hr {
    margin: 20px 0;
  }
  img {
    height: 100px;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  width: 45%;
  margin-left: 5%;
  p {
    margin-left: 10px;
  }
  a {
    margin: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  margin-left: 5%;
  line-height: 2;
  section {
    margin-left: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    font-size: 3rem;
    text-align: left;
  }
  h4 {
    font-size: 1.8rem;
  }
`;

export const Date = styled.div`
  font-size: 1.4rem;
`;
