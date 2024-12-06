import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bookDetailsBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 0;
    gap: 1rem;
  }
`;

export const MetaInfosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MetaInfo = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: start;
`;
