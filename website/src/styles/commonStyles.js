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
  justify-content: flex-end;

  a {
    margin: 20px 3%;
    font-size: 3rem;
    :hover {
      color: #9acff6;
    }
  }
`;
