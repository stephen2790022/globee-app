import { Book } from "../../store/bookApi.types";
import {
  MainContainer,
  BookDetailsWrapper,
  BookCover,
  BookDetailsInfosWrapper,
  BookTitle,
  MetaInfo,
  ButtonGroup,
  StyledButton,
} from "./book-details.style";

type BookDetailsProps = {
  bookData: Book | null;
};

export const BookDetails = ({ bookData }: BookDetailsProps) => {
  return (
    <MainContainer>
      <BookDetailsWrapper>
        <BookCover src={bookData?.img_url} />
        <BookDetailsInfosWrapper>
          <BookTitle>{bookData?.name_book}</BookTitle>
          <MetaInfo>著者：ヒロ前田、テッド寺倉、ロス・タロック</MetaInfo>
          <MetaInfo>出版社：アルク</MetaInfo>
          <ButtonGroup>
            <StyledButton>Button 1</StyledButton>
            <StyledButton isPrimary>Button 2</StyledButton>
          </ButtonGroup>
        </BookDetailsInfosWrapper>
      </BookDetailsWrapper>
      <BookDetailsWrapper>
        <BookCover src={bookData?.img_url} />
        <BookDetailsInfosWrapper>
          <BookTitle>{bookData?.name_book}</BookTitle>
          <MetaInfo>著者：ヒロ前田、テッド寺倉、ロス・タロック</MetaInfo>
          <MetaInfo>出版社：アルク</MetaInfo>
        </BookDetailsInfosWrapper>
      </BookDetailsWrapper>
    </MainContainer>
  );
};
