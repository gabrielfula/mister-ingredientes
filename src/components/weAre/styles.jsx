import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding-top: 3rem;
`;

export const LeftText = styled.div`
  background: pink;
  display: flex;
  width: 50%;
  padding-top: 3rem;
`;

export const RightText = styled.div`
  background: green;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;

    h3 {
      font-weight: 500;
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    p {
      text-align: start;
    }
  }
`;

export const ButtonGreen = styled.button`
  background: rgba(21, 38, 20, 1);
  color: #fff;
  padding: 0.8rem 3rem;
  border-radius: 7px;
`;
