import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  font-family: "Playfair Display", serif;
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
  transition: background-color 1s;
  :hover {
    background-color: #d7d7d7;
    h1 {
      color: #515cde;
    }
    i {
      color: #515cde;
    }
    p {
      color: black;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: white;
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
    color: white;
    font-size: 2.2rem;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  i {
    margin: 10px;
    font-size: 2.2rem;
    color: white;
    :hover {
      color: black;
    }
  }
  a {
    width: 100%;
    img {
      width: 70%;
      height: 200px;
      margin: 20px 15%;
    }
  }
  div a {
    width: 10%;
  }
`;

export const ProjDescriptionWrapper = styled.div`
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
    width: 75%;
    height: 350px;
    margin-top: 60px;
    @media (max-width: 900px) {
      height: 300px;
    }
  }
  a span {
    color: #d7d7d7;
    text-decoration: underline;
    :hover {
      color: #515cde;
      background-color: #d7d7d7;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  a {
    width: 45%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    a,
    img {
      width: 100%;
    }
  }
`;
