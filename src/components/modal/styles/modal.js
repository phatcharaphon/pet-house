import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => display};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Base = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 50px 50px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 40%;
  transition: transform 0.8s;
  transform: translate(200%, ${({ translateY }) => translateY});

  &.active {
    transform: translate(0%, ${({ translateY }) => translateY});
  }
`;

export const Link = styled.a`
  color: #f1bc19;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  left: 15px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Close = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 10px;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
