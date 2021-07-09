import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  body{
    font-family: 'Open Sans',sans-serif;
    margin: 0;
    height: 100vh;
    background-color: whitesmoke;
  }

  h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
  }
 
  a {
    text-decoration: none;
  }

`;
