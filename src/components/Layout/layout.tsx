import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { GlobalStyle } from "../../styles/global";
import { useEffect, useState } from "react";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.pc}) {
    padding: 0.5rem;
  }
`;

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
};
