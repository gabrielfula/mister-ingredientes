import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  background: rgba(255, 249, 55, 1);
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  ul {
    display: flex;
    gap: 3rem;

    a {
      text-transform: uppercase;
      font-size: 13px;
    }
  }
`;
