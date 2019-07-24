import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: auto;
  margin-top: 45px;
  width: 80%;
  i {
    border-radius: 50%;
    border: 1px solid white;
    padding: 20px;
    font-size: 5rem;
    transition: background-color 1s;
  }
  a {
    :hover {
      i {
        background-color: #d7d7d7;
      }
    }
  }
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;
