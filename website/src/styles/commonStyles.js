import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 300px;
  background: white;
  border: none;
  border-bottom: 5px solid #9acff6;
  color: black;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 5px;
  }

  :hover {
    border: 1px solid black;
    color: #9acff6;
    background: black;
  }
`;
