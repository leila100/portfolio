import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: auto;
  margin-top: 15px;
  width: 80%;
  i {
    border-radius: 50%;
    border: 1px solid white;
    padding: 15px;
    font-size: 3rem;
    transition: padding 1s;
    :hover {
      padding: 20px;
      font-size: 3.5rem;
    }
  }
`;
