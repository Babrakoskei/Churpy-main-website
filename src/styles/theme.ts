import { createGlobalStyle } from "styled-components";

const theme = {
  color: {
    primary: '#40ba58',
    secondary: '#060f40',
    white: '#ffffff',
    tertiary: '#0a122a',
  },
  font: {
    family: "'Nunito', sans-serif",
    size: {
      extraSmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      extraLarge: '24px',
    }
  },
  breakpoint: {
    mobile: '375px',
    tablet: '600px',
    laptop: '1200px',
    desktop: '1600px',
  },
};

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #40ba58;
    --secondary-color: #060f40;
    --white-color: #ffffff;
    --tertiary-color: #0a122a;
    --primary-color-rgb: 23,155,255;
}
  }
    
  *, *:before, *:after{
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
  }

  body {
    background-color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.7em;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  a, p {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }
`;

export {theme, GlobalStyle };
