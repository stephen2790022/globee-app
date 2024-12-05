import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Set border-box globally */
  *, *::before, *::after {
    box-sizing: border-box; /* Include padding and border in width/height */
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%; /* Ensures it fits the viewport */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }

  p, h1 {
    margin: 0;
    padding: 0;
    unicode-bidi: normal;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  .swiper-wrapper .swiper-slide {
    width: auto !important;
  }
`;
