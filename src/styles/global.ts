import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .swiper-wrapper .swiper-slide {
    width: fit-content !important; /* Force the style to override */

  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.3s, color 0.3s;
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
`;
