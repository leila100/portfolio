import styled from "styled-components";

import backgroundImage from "../../assets/images/background2.jpg";

export const ProjectSection = styled.section`
  background: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 20px;
`;

export const Header = styled.h2`
  color: white;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 20px auto;
  text-align: center;
  padding: 20px;
  border-bottom: 2px solid #9acff6;
  width: 40%;
`;

export const ProjectsWrapper = styled.div`
  margin: 45px auto;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
`;

export const ProjectWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 47%;
  padding: 20px;
  margin: 10px auto;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 10px auto;
  letter-spacing: -1px;
`;

export const ProjImg = styled.img`
  background-size: cover;
  background-position: center;
  height: 200px;
`;

export const ProjDesc = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  margin: 2% 0;
  font-family: "Open Sans", sans-serif;
`;

export const Tech = styled.div`
  font-size: 1.5rem;
  color: grey;
  line-height: 1.6;
  margin: 1% 0;
  font-family: "Open Sans", sans-serif;
`;
