import styled from "styled-components";

export const Content = styled.section`
  padding: 2rem;
`;

export const AboutContent = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;

  .text {
    text-align: start;
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  .titlePlace {
    display: flex;
    justify-content: center;
  }

  .title {
    text-align: start;

    p {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  button {
    background: rgba(255, 249, 55, 1);
  }
`;

export const RightText = styled.div`
  background: green;
  width: 50%;
`;
