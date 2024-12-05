import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/theme";
import { GlobalStyle } from "../../../styles/global";
import { useIsDarkMode } from "../../../hooks/useIsDarkMode";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
};
