import styled from "styled-components";

export const Header = styled.header`
  margin-left: 20%;
  margin-top: 150px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  line-height: 70px;
  h1 {
    font-size: 8rem;
  }
  h2 {
    font-size: 4.5rem;
  }
  p {
    font-size: 3rem;
  }
  img {
    text-align: center;
    margin-top: 80px;
    width: 80%;
    height: 100px;
  }
`;

export const BG = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7;
`;
