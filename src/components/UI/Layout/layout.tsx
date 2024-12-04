import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/theme";
import { GlobalStyle } from "../../../styles/global";
import { useIsDarkMode } from "../../../hooks/useIsDarkMode";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.pc}) {
    padding: 0.5rem;
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
