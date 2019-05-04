import styled from "styled-components";

export const Header = styled.header`
  margin-left: 20%;
  margin-top: 200px;
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
    margin-bottom: 25px;
    width: 60%;
    height: 200px;
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

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  i {
    margin: 20px 3%;
    font-size: 3rem;
    color: white;
  }
`;
