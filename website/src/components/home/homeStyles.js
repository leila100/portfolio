import styled from "styled-components";

import backgroundImage from "../../assets/images/background.jpg";
import { Button } from "../../styles/commonStyles";

export const HomeSection = styled.section`
  background-position: center;
  padding-top: 80px;
  min-height: 85vh;
  position: relative;
  background: url(${backgroundImage});
  background-size: cover;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Header = styled.div`
  max-width: 50%;
  color: white;
  .heading {
    font-size: 6.5rem;
    font-weight: 700;
    letter-spacing: -2px;
  }
  .subHeading {
    color: #9acff6;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 3%;
  }
  h3 {
    font-size: 2.1rem;
    letter-spacing: 1px;
    line-height: 1.3;
    margin-bottom: 10%;
  }
  p {
    font-size: 2rem;
    line-height: 1.6;
    margin: 2% 0;
    font-family: "Open Sans", sans-serif;
  }

  @media (max-width: 800px) {
    line-height: 1.1;
    max-width: 100%;
    .heading {
      font-size: 4.5rem;
    }
    .subHeading {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export const HomeButton = styled(Button)`
  width: 30%;
  padding: 8px 20px;
`;
