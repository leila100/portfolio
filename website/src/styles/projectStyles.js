import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 20px 2%;
  border-radius: 15px;
  padding: 40px 30px;
  box-shadow: -1px 7px 35px -3px #454545;
  background-color: #d7d7d7;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #3D76D8;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    align-self: center;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 2rem;
  }

  p {
    color: #001e3b;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  i {
    margin: 10px;
    font-size: 2.2rem;
    color: #3D76D8;
    :hover {
      color: black;
    }
  }
  img {
    width: 80%;
    height: 200px;
    margin: 20px auto;
  }

  /* ${props => (props.index % 2 === 0 ? `transform: rotate(-1.5deg);` : `transform: rotate(1.5deg);`)} */
`;
