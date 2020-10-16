import styled from "styled-components";

export const Container = styled.div``;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 10px auto;
  width: 100%;
  max-width: 350px;

  &:first-of-type {
    margin-top: 30px;
  }

  &:last-of-type {
    margin-bottom: 30px;
  }

  ${({ clickable }) => clickable && "&:hover{cursor:pointer;}"}
`;

export const Text = styled.p`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: 500;
`;

export const Icon = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-right: 15px;
`;

export const Input = styled.input`
  color: #f1bc19;
  border: solid #3f3f3f50 0.5px;
  border-radius: 30px;
  background: none;
  height: 30px;
  padding: 2.5px 15px;
  outline: none;
  overflow: auto;
  flex: 1;

  &::placeholder {
    color: #f1bc1975;
  }
`;
