import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    box-shadow: none;
    border-radius: 0;
    gap: 0.5rem;
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const BookCover = styled.img`
  width: 90px;
  height: auto;
  object-fit: cover;
`;

export const BookTitle = styled.h1`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text};
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const StyledButton = styled.button<{ $isPrimary?: boolean }>`
  padding: 0.2rem 1rem;
  width: 100%;
  max-width: 250px;

  height: 28px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid
    ${({ $isPrimary, theme }) =>
      $isPrimary ? "transparent" : theme.colors.primary};
  border-radius: 5px;
  color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.background : theme.colors.primary};
  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.primary : "transparent"};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ theme, $isPrimary }) =>
      $isPrimary ? "transparent" : theme.colors.primary};
    color: ${({ theme, $isPrimary }) =>
      $isPrimary ? theme.colors.primary : theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:focus {
      outline: none;
      color: ${({ $isPrimary, theme }) =>
        $isPrimary ? theme.colors.background : theme.colors.primary};
      background-color: ${({ $isPrimary, theme }) =>
        $isPrimary ? theme.colors.primary : "transparent"};
    }

    &:active {
      color: ${({ $isPrimary, theme }) =>
        $isPrimary ? theme.colors.background : theme.colors.primary};
      background-color: ${({ $isPrimary, theme }) =>
        $isPrimary ? theme.colors.primary : "transparent"};
    }
  }
`;

StyledButton.defaultProps = {
  $isPrimary: false,
};

export const Badge = styled.span`
  white-space: nowrap;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  padding: 1px 5px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.bookDetailsBackground};
`;
