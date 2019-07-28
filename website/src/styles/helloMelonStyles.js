import styled from "styled-components";

export const HelloMelonWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  line-height: 70px;

  h1 {
    font-size: 4rem;
    margin-top: 50px;
  }
  h2 {
    font-size: 2.2rem;
  }
  img {
    width: 90%;
    height: 500px;
    margin-top: 50px;
  }
`;

export const Section = styled.section`
  text-align: left;
  margin: 10px 5%;
  font-family: "Open Sans", sans-serif;

  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 2;
  }
`;

export const List = styled(Section)`
  h3 {
    font-size: 2.3rem;
  }
  ul {
    list-style-type: circle;
  }
  li {
    margin-bottom: 10px;
  }
`;

export const Techs = styled(Section)`
  display: flex;
  flex-wrap: wrap;
`;

export const Tech = styled.span`
  background-color: #d7d7d7;
  color: #515cde;
  border-radius: 30%;
  margin: 10px;
  height: 50px;
  margin: 10px 10px;
  width: 20%;
  text-align: center;
  line-height: 3;
  font-size: 1.7rem;

  @media (max-width: 950px) {
    font-size: 1.6rem;
    width: 25%;
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
    width: 43%;
  }
`;
