import styled from "styled-components";

export const Item = styled.div`
  border-radius: 20px;
  overflow: hidden;
  color: #3f3f3fe0;
  box-shadow: 0 1.5px 5px grey;
  background: none;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 300px;
  height: 100%;
  resize: vertical;
`;

export const Title = styled.p`
  margin: 5px 0 0 15px;
  font-size: 18px;
`;

export const Location = styled.p`
  margin: 3px 0 0 17px;
  font-size: 14px;
`;

export const PriceRate = styled.p`
  margin: 3px 0 0 15px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Icon = styled.img``;

export const Rating = styled.div``;
