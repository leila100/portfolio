import styled from "styled-components";

export const Header = styled.header`
  max-width: 800px;
  margin: 100px auto;
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
    line-height: 1.2;
  }
  @media (max-width: 800px) {
    margin: 50px auto;
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
  p {
    font-size: 2.2rem;
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
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 30%;
      margin-bottom: 10px;
    }
  }
`;

export const Who = styled.div`
  font-size: 2.5rem;
  margin-top: 10px;
  cursor: pointer;
  i {
    margin-right: 2%;
  }
`;
