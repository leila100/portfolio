import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin-left: 20%;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2% 0;
  max-width: 390px;
  border-radius: 15px;
  padding: 40px 30px 60px;
  box-shadow: -1px 7px 35px -3px #454545;

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

  a {
    margin: 10px;
    font-size: 2.2rem;
    :hover {
      color: #4d6fa4;
    }
  }

  ${props => (props.index % 2 === 0 ? `transform: rotate(-2deg);` : `transform: rotate(2deg);`)}
`;
