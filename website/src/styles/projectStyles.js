import styled from "styled-components";
import backImage from "../assets/images/background3.jpg";

export const ProjectsWrapper = styled.div`
  margin: 0;
  margin-left: 20%;
  padding-bottom: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url(${backImage});
  background-size: cover;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 2%;
  max-width: 390px;
  border-radius: 15px;
  padding: 40px 30px 60px;
  box-shadow: -1px 7px 35px -3px #454545;
  background-color: white;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #4d6fa4;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  h2 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 2rem;
  }

  p {
    color: #001e3b;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin-bottom: 30px;
  }

  i {
    margin: 10px;
    font-size: 2.2rem;
    color: black;
    :hover {
      color: #4d6fa4;
    }
  }

  ${props => (props.index % 2 === 0 ? `transform: rotate(-1.5deg);` : `transform: rotate(1.5deg);`)}
`;
