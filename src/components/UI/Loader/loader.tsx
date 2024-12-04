import Gif from "../../../assets/gif/loader2.gif";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LoadingText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const LoaderImage = styled.img`
  width: 230px;
  height: auto;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src={Gif} alt="Loading..." />
      <LoadingText>Now Loading...</LoadingText>
    </LoaderContainer>
  );
};
