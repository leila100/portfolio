import styled from "styled-components";

export const BG = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7;
`;

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
