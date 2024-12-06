import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 12px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 12px 16px;
  }
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;
