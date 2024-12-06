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
  $isActive?: boolean;
  $isAllowed: boolean;
};

const Tab = styled.div<TabType>`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.muted};
  border-bottom: 2px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary : "transparent"};
  padding: 0.5rem 1rem;
  cursor: ${({ $isAllowed }) => ($isAllowed ? "pointer" : "not-allowed")};
  pointer-events: ${({ $isAllowed }) => ($isAllowed ? "auto" : "none")};
  transition:
    color 0.3s,
    border-bottom-color 0.3s;

  &:hover {
    color: ${({ $isAllowed, theme }) => $isAllowed && theme.colors.primary};
  }
`;
Tab.defaultProps = {
  $isActive: undefined,
};

Tab.defaultProps = {
  theme: {
    colors: {
      primary: "#000",
      muted: "#666",
      border: "#ccc",
      text: "#333",
    },
  },
};

const Content = styled.div`
  padding: 1rem;

  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 1rem;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { MainContainer, Content, Tab, TabContainer };
