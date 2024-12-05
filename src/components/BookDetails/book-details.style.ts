import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%; /* Inherit the width from OuterContainer */
  max-width: 100%; /* Respect the parent's constraints */
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.bookDetailsBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const BookDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 450px; /* Constrain to 450px */
  width: 100%; /* Responsive to parent width */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
    box-shadow: none;
    border-radius: none;
  }
`;

export const BookDetailsInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const BookCover = styled.img`
  width: 90px; /* Fixed width */
  height: auto; /* Dynamic height based on content */
  object-fit: cover;
`;

export const BookTitle = styled.h1`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text};
  text-overflow: ellipsis; /* Adds "..." for overflowing text */
  max-width: 100%;
`;

export const MetaInfo = styled.p`
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  margin: 0;
  font-size: 12px;
  color: ${(props) => props.theme.colors.muted};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const StyledButton = styled.button<{ isPrimary?: boolean }>`
  padding: 0.5rem 1.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid
    ${({ isPrimary, theme }) =>
      isPrimary ? "transparent" : theme.colors.primary};
  border-radius: 4px;
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.background : theme.colors.primary};
  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.primary : "transparent"};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ theme, isPrimary }) =>
      isPrimary ? "transparent" : theme.colors.primary};
    color: ${({ theme, isPrimary }) =>
      isPrimary ? theme.colors.primary : theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const FeatureItem = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
`;

export const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primary};
`;

export const FeatureLabel = styled.span`
  font-size: 12px;
  text-align: center;
`;
