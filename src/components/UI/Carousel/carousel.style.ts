import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  flex: 1;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export { CarouselContainer, StyledImage };
