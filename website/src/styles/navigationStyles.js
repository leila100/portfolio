import styled from "styled-components";

export const LinkGroupColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Nav = styled(LinkGroupColumn)`
  margin-bottom: 70px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 20%;
  /* background-color: #01327e; */
  background-color: #4d6fa4;
  color: white;
  padding: 0 1.5%;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  opacity: 0.8;
`;

export const NavLinks = styled(LinkGroupColumn)`
  height: 20%;
  padding: 30px 0;
  span {
    color: white;
  }
`;

export const NavIntro = styled(LinkGroupColumn)`
  height: 25%;
  a {
    margin: auto;
    img {
      width: 152px;
      height: 152px;
      border-radius: 50%;
      margin: auto;
    }
    h2 {
      margin: 20px 0 10px;
      font-size: 2rem;
      color: white;
    }
  }
`;

export const NavContact = styled(LinkGroupColumn)`
  i {
    margin: 8px 5% 8px;
  }
`;
