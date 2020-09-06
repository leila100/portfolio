import styled from "styled-components";

export const AboutSection = styled.section`
  max-width: 1140px;
  margin: 45px auto;
`;

export const Descriptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  font-size: 1.7rem;

  @media (max-width: 900px) {
    max-width: 660px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  width: 45%;
  margin: 10px;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  color: $bg-dark;
  margin-bottom: 10px;
  font-family: "Lora", serif;
  font-weight: bold;
  border-bottom: 2px solid #9acff6;
`;

export const Text = styled.p`
  font-size: 1.7rem;
  line-height: 1.5;
`;
