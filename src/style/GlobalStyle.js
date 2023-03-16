import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Lexend Deca';  
    font-weight: 400;    
  }
  a{
    text-decoration: none;
  }
  body{
  font-family: 'Lexend Deca';  
  font-weight: 400;    
  margin: 0 auto;
  background-color: #F2F2F2;
  }
`;

export default GlobalStyle;