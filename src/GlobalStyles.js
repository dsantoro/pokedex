import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Coda&display=swap');
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  html, body {
    font-family: 'Coda', cursive;
    background-color: #fafafa;
  }
`;