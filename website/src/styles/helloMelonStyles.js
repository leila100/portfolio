import styled from "styled-components";

export const HelloMelonWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  line-height: 55px;

  h1 {
    font-size: 4rem;
    margin-top: 50px;
  }
  h2 {
    font-size: 2.2rem;
  }
  img {
    width: 90%;
    height: 500px;
    margin-top: 60px;
    @media (max-width: 900px) {
      height: 300px;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;
