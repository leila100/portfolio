import styled from "styled-components";

export const Icons = styled.div`
  background: transparent;
  color: white;
  z-index: 10;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  ${(props) => props.left && `justify-content: flex-start;`}
  ${(props) => props.right && `justify-content: flex-end;`}
  ${(props) =>
    props.center && `justify-content: center;`}

  a {
    margin: 20px 3%;
    font-size: 3rem;
    /* color: white; */
  }
`;

export const Container = styled.div`
  margin: auto;
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
    list-style-type: square;
    margin-left: 3%;
  }
  li {
    margin-bottom: 10px;
  }
  img {
    height: 350px;
    margin-top: 10px;
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
