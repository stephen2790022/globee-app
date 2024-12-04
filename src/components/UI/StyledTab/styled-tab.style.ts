import styled from "styled-components";

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

type TabType = {
  isActive?: boolean;
  isAllowed: boolean;
  isDarkMode?: boolean;
};

const Tab = styled.div<TabType>`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.muted};
  border-bottom: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : "transparent"};
  padding: 0.5rem 1rem;
  cursor: ${({ isAllowed }) => (isAllowed ? "pointer" : "not-allowed")};
  transition:
    color 0.3s,
    border-bottom-color 0.3s;

  &:hover {
    color: ${({ isAllowed, theme }) => isAllowed && theme.colors.primary};
  }
`;

const Content = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { MainContainer, Content, Tab, TabContainer };
