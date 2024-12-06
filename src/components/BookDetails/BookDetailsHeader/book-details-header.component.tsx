import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import {
  BackButton,
  BackButtonWrapper,
  HeaderContainer,
  Title,
} from "./book-details-header.stle";

export const BookDetailsHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackButtonWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <SlArrowLeft style={{ fontSize: "18px" }} />
        </BackButton>
        <Title>書籍詳細</Title>
      </BackButtonWrapper>
    </HeaderContainer>
  );
};
