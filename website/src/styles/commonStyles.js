import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  width: 100%;

  ${props => props.left && `justify-content: flex-start;`}
  ${props => props.end && `justify-content: flex-end;`}

  i {
    margin: 20px 3%;
    font-size: 3rem;
    color: white;
  }
`;

export const Container = styled.div`
  height: 100vh;
  /* padding: 10px; */
  margin: auto;
  background-image: linear-gradient(to right, #2f88d6, #515cde);
  background-size: cover;
`;
