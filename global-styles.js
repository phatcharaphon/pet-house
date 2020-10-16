import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body{
    background-color: #fff;
    color: #3f3f3f;
    font-size: 16px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  button, input{
    border: none;
    outline: none;
    background: none;
  }
  div{
    outline: none;
  }
`;
