import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: auto 65%;
  grid-gap: 4rem;

  @media (max-width: 750px) {
    grid-template-columns: auto;
  }
`;
