import styled from "styled-components";

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  max-width: 450px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem 1rem;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  padding: 2px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;

export const FeatureLabel = styled.span`
  font-size: 10px;
  text-align: center;
`;

export const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
`;
