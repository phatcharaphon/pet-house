import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  ${({ color }) =>
    color !== "none"
      ? `
  border-radius: 50vh;
  background-color: ${color};
  box-shadow: 3px 3px 5px grey;
  `
      : `background-color: none;
  max-width: 500px;`}
  padding: 8px 20px;
  color: #fff;
  font-size: 15px;
  max-width: 150px;

  &:hover {
    opacity: 0.5;
  }

  &:disabled {
    cursor: default;
    background-color: #3f3f3f50;
    opacity: 0.5;
  }
`;
