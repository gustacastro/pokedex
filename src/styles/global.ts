import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-background: #141518;
    --secondary-background: #202125;
    --header-background: #111416;

    --main-text: #AAAAAA;
    --secondary--text: #2E2F2F;

    --comment: #6B737C;
    --red: #f97583;
    --white: #ffffff;
    --orange: #FD7D24;
    --purple: #b392e3;
    --yellow: #ffd700;
    --blue: #79B8DB;
    --green: #9BCC50;
    --pink: #F366B9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    background: var(--main-background);

    color: var(--white);
  }

  body, input, textarea, button {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 300;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }


`;
